import React from 'react';
import Section from 'components/Section';
import { Button } from 'components/buttons';

import ApiIcon from 'assets/images/apidark.svg';
import CliIcon from 'assets/images/clidark.svg';
import DevIcon from 'assets/images/devdark.svg';

import './style.scss';

export default function SectionB() {
  return (
    <Section>
      <div styleName="container">
        <div styleName="card">
          <CliIcon styleName="icon" />
          <h1>Mythril CLI</h1>
          <p>
            The classic &apos;myth&apos; command line tool for auditors is
            available via Pypi or as Docker Image
          </p>
          <Button size="sm" to="/">Get Free Access</Button>
        </div>
        <div styleName="card">
          <ApiIcon styleName="icon" />
          <h1>Mythril API</h1>
          <p>
            Use our free API to build your own smart contract analysis tools or
            add security analysis to your build process
          </p>
          <Button size="sm" to="/">Get API Key</Button>
        </div>
        <div styleName="card">
          <DevIcon styleName="icon" />
          <h1>Developer Tools</h1>
          <p>Continuous Integrations, Scripts & IDE extension</p>
          <Button size="sm" to="/">Coming Soon</Button>
        </div>
      </div>
    </Section>
  );
}
