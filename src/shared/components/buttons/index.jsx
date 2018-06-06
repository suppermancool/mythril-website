import { themr } from 'react-css-super-themr';
import { Button as ProtoButton } from 'topcoder-react-utils';

import defaultTheme from './themes/default.scss';

export const Button = themr('DefaultButton', defaultTheme)(ProtoButton);

export default undefined;
