import './src/styles/global.css';

// Self-hosted fonts help decrease page load time
// See: https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/
import '@fontsource/lato';
import '@fontsource-variable/raleway';

import React from 'react';
import I18nProvider from './src/components/i18n-provider';

// Wrap the root element with the i18n provider to allow for translation
export const wrapRootElement = ({ element }) => {
    return <I18nProvider>{element}</I18nProvider>;
};
