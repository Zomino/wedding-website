import { StaticImage } from 'gatsby-plugin-image';
import { Button, Input } from '@headlessui/react';
import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import StyledButton from '../components/primitives/styled-button';
import StyledTextInput from '../components/primitives/styled-text-input';

const WelcomePage = () => {
    return (
        <Layout pageTitle="Welcome">
            <h1 className="sr-only">Welcome</h1>
            <StaticImage
                src="../images/elephant-and-rabbit.png"
                alt="Drawing of an elephant and a rabbit"
                className="w-full"
            />
            <section className="mt-5">
                <h2 className="sr-only">Authentication Form</h2>
                <form>
                    <StyledTextInput
                        className="m-auto block w-full text-center md:max-w-sm"
                        placeholder="Enter your unique code"
                    />
                    <StyledButton className="mt-4">Enter site</StyledButton>
                </form>
            </section>
        </Layout>
    );
};

export default WelcomePage;

export const Head = () => (
    <Seo
        title="Welcome"
        description="Welcome to Angela and Zou's wedding website. Enter your unique code to access the site."
    />
);
