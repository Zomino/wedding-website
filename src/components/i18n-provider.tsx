import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import React from 'react';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import Backend from 'i18next-http-backend';

// Implementation based on the following:
// https://medium.com/@makerspirit/step-by-step-guide-to-use-i18next-in-gatsby-app-19d21f2b723d
// https://www.youtube.com/watch?v=SA_9i4TtxLQ&t=953s
i18n
    .use(initReactI18next)
    .use(LanguageDetector) // Determine the user's language through a variety of methods
    // Load translations from the server.
    // Note that 'Backend' refers to the server hosting the application.
    // The default location for translations is '/locales/{{lng}}/{{ns}}.json'.
    // Note that Gatsby copies everything in the 'static' directory to the root of the public folder: https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/
    .use(Backend)
    .init({
        fallbackLng: 'en-GB',
        // Gatsby injects NODE_ENV into the build process
        debug: process.env.NODE_ENV === 'development',
        interpolation: {
            escapeValue: false, // React escapes interpolated values by default to prevent XSS attacks
        },
    });

const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export default I18nProvider;
