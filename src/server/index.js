/**
 * Server initialization.
 */

import Application from 'shared';
import { factory as reducerFactory } from 'reducers';
import { redux, server as serverFactory } from 'topcoder-react-utils';

import webpackConfigFactory from '../../webpack.config';

const mode = process.env.BABEL_ENV;

const EXTRA_SCRIPTS = [
  /* TODO: These two scripts load necessary fonts from Google CDN.
   * Should be done in a better way later. */
  '<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js" type="text/javascript"></script>',
  '<script type="text/javascript">WebFont.load({ google: { families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic","Titillium Web:regular,600,700,900","Open Sans Condensed:300,700"]  }});</script>',
];

async function beforeRender(req) {
  const store = await redux.storeFactory({
    getReducerFactory: () => reducerFactory,
    httpRequest: req,
  });
  return { extraScripts: EXTRA_SCRIPTS, store };
}

global.KEEP_BUILD_INFO = true;
serverFactory(webpackConfigFactory(mode), {
  Application,
  beforeRender,
  devMode: mode === 'development',
});
