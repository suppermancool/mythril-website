/**
 * ApiKey signup page.
 */
/* eslint-env browser */
import React from 'react';
import { fromPairs, isEmpty } from 'lodash';
import Section from 'components/Section';
import styles from './style.scss';

const reCaptchaSiteKey = '6LcZv10UAAAAAH2I6f3F6UMzkpVWe4MYcZE2BW76';

function load(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default class HomePage extends React.Component {
  state = {
    errors: {},
  }

  componentDidMount() {
    load('https://www.google.com/recaptcha/api.js');
  }

  submit = (e) => {
    e.preventDefault();
    const values = fromPairs([
      ...['firstName', 'lastName', 'email', 'g-recaptcha-response']
        .map(id => ([id, document.getElementById(id).value])),
      ...['mailing', 'terms']
        .map(id => ([id, document.getElementById(id).checked])),
    ]);

    const { email, terms, 'g-recaptcha-response': gRecaptcha } = values;
    const errors = {};
    if (!email) {
      errors.email = 'This field is required.';
    } else if (!/\w+@\w+\.\w+/.test(email)) {
      errors.email = 'This field is not in the correct email format.';
    }

    if (!terms) {
      errors.terms = 'This field is required.';
    }
    if (!gRecaptcha) {
      errors.gRecaptcha = 'This field is required.';
    }
    this.setState({ errors });

    if (isEmpty(errors)) {
      // TODO: replace real submission logic here
      alert(JSON.stringify(values));
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <Section type="dark">
        <div styleName="box">
          <h1 styleName="title">API Key</h1>

          <form styleName="form" onSubmit={this.submit}>

            <p styleName="description">
              We have built a powerful security analysis APIs around JSON-RPC
              and REST that you can use to build your own security tools.
              <br />
              Sign up here to receive an API token for use in your app.
            </p>

            {!isEmpty(errors) &&
            <div styleName="form-group">
              <p styleName="form-error">There was a problem with your submission.</p>
            </div>
            }

            <div styleName="form-group">
              <div styleName="form-title">What is your name?</div>
              <div>
                <label styleName="form-inline-group" htmlFor="firstName">
                  <input id="firstName" name="firstName" type="text" />
                  <span>First</span>
                </label>
                <label styleName="form-inline-group" htmlFor="lastName">
                  <input id="lastName" type="text" />
                  <span>Last</span>
                </label>
              </div>
            </div>

            <div styleName="form-group" className={errors.email ? styles.error : ''}>
              <div styleName="form-title">
                What is your email address? <span styleName="required">*</span>
              </div>
              <input type="email" id="email" />
              {errors.email && <div styleName="error-msg">{errors.email}</div>}
            </div>

            <div styleName="form-group">
              <div styleName="form-title">
                Mailing List
              </div>
              <div className="checkbox-group">
                <label className="form-check-label" htmlFor="mailing">
                  <input type="checkbox" className="form-check-input" id="mailing" name="mailing" />
                  Check to sign up for the MYTHRIL™ News mailing list.
                </label>
              </div>
            </div>

            <div styleName="form-group" className={errors.terms ? styles.error : ''} htmlFor="terms">
              <div styleName="form-title">
                Terms of Service <span styleName="required">*</span>
              </div>
              <label className="form-check-label" htmlFor="terms">
                <input type="checkbox" className="form-check-input" id="terms" name="terms" />
                Check to acknowledge acceptance of our
                {' '}
                <a href="/terms">Terms of Service</a>
              </label>
              {errors.terms && <div styleName="error-msg">{errors.terms}</div>}
            </div>

            <div styleName="form-group" className={errors.gRecaptcha ? styles.error : ''}>
              <div className="g-recaptcha" data-sitekey={reCaptchaSiteKey} />
              {errors.gRecaptcha && <div styleName="error-msg">{errors.gRecaptcha}</div>}
            </div>

            <div styleName="form-group">
              <input styleName="submit" type="submit" value="Submit" />
            </div>

          </form>
          <p styleName="legal">
            By clicking Submit you signify that you have read and agree to our
            {' '}
            <a href="/terms">Terms of Service</a>
            {' and '}
            <a href="/privacy">Privacy Policy.</a>
          </p>
        </div>
      </Section>
    );
  }
}
