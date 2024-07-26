import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config();

const siteUrl = 'https://www.angelaandzou.com';

const config: GatsbyConfig = {
    // Unfortunately useTranslation cannot be used inside of the Head API.
    // gatsby-plugin-react-i18next does not currently work with React context: https://github.com/gatsbyjs/gatsby/issues/36458
    siteMetadata: {
        author: 'Zou Minowa',
        description: `Angela Chan and Zou Minowa's wedding website`,
        title: `Angela & Zou`,
        siteUrl,
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
            resolve: 'gatsby-transformer-sharp' // Required for dynamic images (e.g. S3)
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        // Photos
        // Implementation based on https://github.com/gatsby-uc/plugins/tree/main/packages/gatsby-source-s3
        {
            resolve: `gatsby-source-s3`,
            options: {
              aws: {
                credentials: {
                  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                },
                region: process.env.AWS_REGION,
              },
              buckets: ["angela-zou-wedding-website"], // This is managed manually in the AWS console
            },
          },
        // PWA
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        // Translations
        // Implementation based on https://locize.com/blog/gatsby-i18n/
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'locale',
                path: `./locales/`,
            },
        },
        // The gatsby-plugin-react-i18next has older versions of i18next and react-i18next as peer dependencies.
        {
            resolve: 'gatsby-plugin-react-i18next',
            options: {
                localeJsonSourceName: `locale`, // Name given to `gatsby-source-filesystem` plugin
                languages: ['en', 'zh'], // Languages supported by the website
                defaultLanguage: 'en', // Default language will be used if the user's preferred language is not available
                siteUrl,
                i18nextOptions: {
                    debug: process.env.NODE_ENV === 'development', // Logs information to the console
                    supportedLngs: ['en', 'zh'], // Languages supported by the website
                    fallbackLng: 'en', // Fallback language for missing translations
                    defaultNS: 'common', // Namespaces are used to separate translations into different files for better organization and lazy loading
                    interpolation: {
                        escapeValue: false, // Not needed as React escapes interpolated values by default to prevent XSS attacks
                    },
                },
            },
        },
    ],
};

export default config;
