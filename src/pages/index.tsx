import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';

import Body from '../components/body';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <h1 className="sr-only">{t('page-heading')}</h1>
            <StaticImage alt={t('hero-image-alt')} className="w-full" src="../images/elephant-and-rabbit.png" placeholder="blurred" />
            <section className="text-md lg:text-lg">
                <h2 className="sr-only">{t('invitation-and-overview.section-heading')}</h2>
                {/* i18next documentation recommends use of type assertion: https://www.i18next.com/overview/typescript */}
                {(
                    t('invitation-and-overview.content', {
                        returnObjects: true,
                    }) as Array<string>
                ).map((paragraph, index) => (
                    <p className="mt-3" key={index}>
                        {paragraph}
                    </p>
                ))}
            </section>
            <section className="mt-5">
                <h2 className="sr-only">{t('schedule-and-addresses.section-heading')}</h2>
                <section className="mt-10">
                    <h3 className="font-raleway text-xl tracking-wider lg:text-3xl">{t('schedule-and-addresses.ceremony.section-heading')}</h3>
                    <dl className="text-md mt-5 lg:text-lg">
                        <dt className="sr-only">{t('terms.time')}</dt>
                        <dd>
                            <time>{t('schedule-and-addresses.ceremony.time')}</time>
                        </dd>
                        <dt className="sr-only">{t('terms.address')}</dt>
                        <dd className="mt-3">
                            <address>
                                {/* i18next documentation recommends use of type assertion: https://www.i18next.com/overview/typescript */}
                                {(
                                    t('schedule-and-addresses.ceremony.address', {
                                        returnObjects: true,
                                    }) as Array<string>
                                ).map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </address>
                        </dd>
                    </dl>
                    <a className="mt-3 inline-flex items-center text-lg hover:text-elephant-dark" href="https://maps.app.goo.gl/HRKWtCmCp7epEMN76" target="_blank">
                        {t('buttons.view-map')}
                        <ArrowTopRightOnSquareIcon className="ml-1 inline-block h-4 w-4" />
                    </a>
                </section>
                <section className="mt-10">
                    <h3 className="font-raleway text-xl tracking-wider lg:text-3xl">{t('schedule-and-addresses.reception.section-heading')}</h3>
                    <dl className="text-md mt-5 lg:text-lg">
                        <dt className="sr-only">{t('terms.time')}</dt>
                        <dd>
                            <time>{t('schedule-and-addresses.reception.time')}</time>
                        </dd>
                        <dt className="sr-only">{t('terms.address')}</dt>
                        <dd className="mt-3">
                            <address>
                                {/* i18next documentation recommends use of type assertion: https://www.i18next.com/overview/typescript */}
                                {(
                                    t('schedule-and-addresses.reception.address', {
                                        returnObjects: true,
                                    }) as Array<string>
                                )?.map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </address>
                        </dd>
                    </dl>
                    <a className="mt-3 inline-flex items-center text-lg hover:text-elephant-dark" href="https://maps.app.goo.gl/hvYe8wJMffBR6Qhp8" target="_blank">
                        {t('buttons.view-map')}
                        <ArrowTopRightOnSquareIcon className="ml-1 inline-block h-4 w-4" />
                    </a>
                </section>
            </section>
        </Layout>
    );
};

export default IndexPage;

// gatsby-plugin-react-i18next needs this query to be able to generate the correct language-specific pages
export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }) {
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
            <Seo description="Welcome to Angela and Zou's wedding website" title="Welcome" />
        </>
    );
};
