import { graphql } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Body from '../components/body';
import Layout from '../components/layout';
import Seo from '../components/seo';

import ButtonStyledLink from '../components/primitives/button-styled-link';

const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <h1 className="mt-5 text-center font-raleway text-4xl">{t('errors.404')}</h1>
            <ButtonStyledLink className="mt-10" to="/">
                {t('buttons.back')}
            </ButtonStyledLink>
        </Layout>
    );
};

export default NotFoundPage;

// gatsby-plugin-react-i18next needs this query to be able to generate the correct language-specific pages
export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { ns: { in: ["common"] }, language: { eq: $language } }) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;

export const Head = () => {
    return (
        <>
            <Body />
            <Seo description="This page does not exist." title="Not Found"  />
        </>
    );
};
