import LargeAnimatedLogo from 'components/LargeAnimatedLogo';
import React from 'react';
import Section from 'components/Section';
import { Button } from 'components/buttons';

import './style.scss';

export default function SectionA() {
  return (
    <Section type="dark">
      <LargeAnimatedLogo />
      <h1 styleName="title">
        Enable a secure and thriving ecosystem of Ethereum dapps & smart
        contracts.
      </h1>
      <p styleName="text">
        The achieve this, we provide a powerful free security analysis API that
        can be integrated into tools, testing pipelines and development
        environments.
      </p>
      <Button to="/">Get Free Access</Button>
    </Section>
  );
}
