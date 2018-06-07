/**
 * A simple Hello World page.
 */

import React from 'react';
import Section from 'components/Section';

import SectionA from './SectionA';
import SectionB from './SectionB';

import './style.scss';

export default function HomePage() {
  return (
    <div>
      <SectionA />
      <SectionB />
      <Section type="dark" />
    </div>
  );
}
