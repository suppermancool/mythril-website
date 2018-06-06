import Icon from 'assets/images/logoicon.svg';
import React from 'react';
import { Link } from 'topcoder-react-utils';

import './style.scss';

export default function Header() {
  return (
    <nav styleName="nav">
      <Link
        styleName="option"
        to="/"
      >
        Home
      </Link>
      <Link to="/api-key" styleName="option">API Key</Link>
      <Icon styleName="logo" />
      <Link to="/news" styleName="option">News</Link>
      <Link to="/docs" styleName="option">Docs</Link>
    </nav>
  );
}
