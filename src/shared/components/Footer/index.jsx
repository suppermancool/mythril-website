import React from 'react';
import { Button } from 'components/buttons';

import './style.scss';

export default function Footer() {
  return (
    <div styleName="container">
      <Button size="xs" to="/">
        About Mythril
      </Button>
      <Button size="xs" to="/">
        API Key
      </Button>
      <Button size="xs" to="/">
        Docs
      </Button>
      <Button size="xs" to="/">
        Support
      </Button>
      <Button size="xs" to="/">
        Terms & Conditions
      </Button>
      <Button size="xs" to="/">
        Privacy Policy
      </Button>
      <Button size="xs" to="/">
        Visit GitHub
      </Button>
    </div>
  );
}
