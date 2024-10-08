import { graphql, HeadFC } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Body from '../components/body';
import Layout from '../components/layout';
import Seo from '../components/seo';

import ButtonStyledLink from '../components/primitives/button-styled-link';

const NotFoundPage = () => {
    const { language, t } = useI18next();

    return (
        <Layout showLanuageSelector={false}>
            <h1 className="text:xl text-center font-raleway md:text-2xl">{t('errors.404')}</h1>
            <ButtonStyledLink className="mt-10" to="/" language={language}>
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

interface HeadPageContext {
    i18n: { language: string };
}

export const Head: HeadFC<{}, HeadPageContext> = (props) => {
    return (
        <>
            <html lang={props.pageContext.i18n.language} />
            <Body />
            <Seo description="This page does not exist." title="Not Found" />
        </>
    );
};
