import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
    const { t } = useTranslation('translations');

    return (
        <Layout>
            <h1 className="sr-only">{t('pages.index.page-heading')}</h1>
            <StaticImage alt={t('pages.index.hero-image-alt')} className="w-full" src="../images/elephant-and-rabbit.png" placeholder="blurred" />
            <section className="text-md lg:text-lg">
                <h2 className="sr-only">{t('pages.index.invitation-and-overview.section-heading')}</h2>
                {/* i18next documentation recommends use of type assertion: https://www.i18next.com/overview/typescript */}
                {(
                    t('pages.index.invitation-and-overview.content', {
                        returnObjects: true,
                    }) as Array<string>
                ).map((paragraph, index) => (
                    <p className="mt-3" key={index}>
                        {paragraph}
                    </p>
                ))}
            </section>
            <section className="mt-5">
                <h2 className="sr-only">{t('pages.index.schedule-and-addresses.section-heading')}</h2>
                <section className="mt-10">
                    <h3 className="font-raleway text-2xl tracking-wider lg:text-3xl">
                        {t('pages.index.schedule-and-addresses.ceremony.section-heading')}
                    </h3>
                    <dl className="text-md mt-5 lg:text-lg">
                        <dt className="sr-only">{t('common.time')}</dt>
                        <dd>
                            {/* TODO: Make time a variable */}
                            <time>15:00</time>
                        </dd>
                        <dt className="sr-only">{t('common.address')}</dt>
                        <dd className="mt-3">
                            <address>
                                {/* i18next documentation recommends use of type assertion: https://www.i18next.com/overview/typescript */}
                                {(
                                    t('pages.index.schedule-and-addresses.ceremony.address', {
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
                </section>
                <section className="mt-10">
                    <h3 className="font-raleway text-2xl tracking-wider lg:text-3xl">
                        {t('pages.index.schedule-and-addresses.reception.section-heading')}
                    </h3>
                    <dl className="text-md mt-5 lg:text-lg">
                        <dt className="sr-only">{t('common.time')}</dt>
                        <dd>
                            {/* TODO: Make time a variable */}
                            <time>18:00</time>
                        </dd>
                        <dt className="sr-only">{t('common.address')}</dt>
                        <dd className="mt-3">
                            <address>
                                {/* i18next documentation recommends use of type assertion: https://www.i18next.com/overview/typescript */}
                                {(
                                    t('pages.index.schedule-and-addresses.reception.address', {
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
                </section>
            </section>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <body className="bg-elephant-lighter py-5 text-center font-lato font-light text-elephant-darker" />
        {/* TODO: Make this dynamic */}
        <Seo description="Welcome to Angela and Zou's wedding website" />
    </>
);
