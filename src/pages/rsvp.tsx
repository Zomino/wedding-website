import { graphql, HeadFC } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Checkbox, Description, Field, Input, Label } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import React from 'react';

import Body from '../components/body';
import Layout from '../components/layout';
import StyledButton from '../components/primitives/styled-button';
import Seo from '../components/seo';

const NotFoundPage = () => {
    const { t } = useI18next();

    const [enabled, setEnabled] = React.useState(false);

    return (
        <Layout>
            <h1 className="text:xl text-center font-raleway md:text-2xl">{t('page-heading')}</h1>
            {/* data-netlify will be parsed by Netlify at deploy time and submissions from this form will be sent to the Netlify form submission handler */}
            <form className="mt-5 w-64" data-netlify="true" method="POST" name="contact">
                <Field className="flex flex-col items-start">
                    <Label>{t('form.name.label')}</Label>
                    <Input className="w-full rounded-sm border-1 border-elephant-darker px-2 py-1" name="name" required type="input" />
                    <Description className="text-xs text-elephant">{t('form.name.description')}</Description>
                </Field>
                <Field className="mt-3 flex flex-col items-start">
                    <Label>{t('form.email.label')}</Label>
                    <Input className="w-full rounded-sm border-1 border-elephant-darker px-2 py-1" name="email" required type="email" />
                    <Description className="text-xs text-elephant">{t('form.email.description')}</Description>
                </Field>
                <Field className="mt-3 flex flex-col items-start">
                    <div className="flex">
                        <Checkbox
                            className="group inline-block size-7 rounded-sm border-1 border-elephant-darker bg-white p-1"
                            checked={enabled}
                            onChange={setEnabled}
                            name="attending"
                        >
                            <CheckIcon className="hidden size-4 group-data-[checked]:block" />
                        </Checkbox>
                        <Label className="ml-3">{t('form.attending.label')}</Label>
                    </div>
                    <Description className="text-xs text-elephant">{t('form.attending.description')}</Description>
                </Field>
                <StyledButton className="mt-10" type="submit">
                    {t('buttons.submit')}
                </StyledButton>
            </form>
        </Layout>
    );
};

export default NotFoundPage;

// gatsby-plugin-react-i18next needs this query to be able to generate the correct language-specific pages
export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { ns: { in: ["common", "rsvp"] }, language: { eq: $language } }) {
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
            <Seo description="RSVP to Angela and Zou's wedding." title="RSVP" />
        </>
    );
};
