/**
 * A simple Hello World page.
 */

import React from 'react';
import Section from 'components/Section';

import './style.scss';

export default function HomePage() {
  return (
    <Section type="dark">
      <h1 styleName="title">API Key</h1>
    </Section>
  );
}
