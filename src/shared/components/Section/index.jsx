import PT from 'prop-types';
import React from 'react';

import './style.scss';

export const TYPES = {
  DARK: 'dark',
  LIGHT: 'light',
};

export default function Section({
  children,
  type,
}) {
  let containerStyle = 'container';
  if (type === TYPES.DARK) containerStyle += ' dark';
  return (
    <div styleName={containerStyle}>
      {children}
    </div>
  );
}

Section.defaultProps = {
  children: null,
  type: '',
};

Section.propTypes = {
  children: PT.node,
  type: PT.string,
};
