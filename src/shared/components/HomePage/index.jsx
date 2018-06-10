/**
 * A simple Hello World page.
 */

import React from 'react';

import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';

import './style.scss';

export default function HomePage() {
  return (
    <div>
      <SectionA />
      <SectionB />
      <SectionC />
    </div>
  );
}
