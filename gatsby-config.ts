import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    // Unfortunately useTranslation cannot be used inside of the Head API.
    // gatsby-plugin-react-i18next does not currently work with React context: https://github.com/gatsbyjs/gatsby/issues/36458
    siteMetadata: {
        author: 'Zou Minowa',
        description: `Angela Chan and Zou Minowa's wedding website`,
        title: `Angela & Zou`,
        siteUrl: `https://www.angelaandzou.com`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        // Tailwind CSS
        {
            resolve: 'gatsby-plugin-postcss',
        },
        // Images
        {
            resolve: 'gatsby-plugin-image',
        },
        {
            resolve: 'gatsby-plugin-sharp',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        // PWA
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-offline',
        },
        // Translations
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'locale',
                path: './src/locales/',
            },
        },
        {
            resolve: 'gatsby-plugin-react-i18next',
            options: {
                localeJsonSourceName: `locale`, // Tame given to `gatsby-source-filesystem` plugin
                languages: ['en-GB', 'zh-HK'],
                defaultLanguage: 'en-GB',
                i18nextOptions: {
                    debug: process.env.NODE_ENV === 'development', // Logs information to the console
                    fallbackLng: 'en-GB', // Fallback language for missing translations
                    defaultNS: 'common', // Namespaces are used to separate translations into different files for better organisation and lazy loading
                    interpolation: {
                        escapeValue: false, // Not needed as React escapes interpolated values by default to prevent XSS attacks
                    },
                },
            },
        },
    ],
};

export default config;
