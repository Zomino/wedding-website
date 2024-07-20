import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import StyledButton from '../components/primitives/styled-button';
import StyledTextInput from '../components/primitives/styled-text-input';

const WelcomePage = () => {
    const [code, setCode] = React.useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        navigate(`/${code}`);
    };

    return (
        <Layout pageTitle="Welcome">
            <h1 className="sr-only">Welcome</h1>
            <StaticImage
                alt="Drawing of an elephant and a rabbit"
                className="w-full"
                src="../images/elephant-and-rabbit.png"
            />
            <section className="mt-5">
                <h2 className="sr-only">Authentication Form</h2>
                <form onSubmit={handleSubmit}>
                    <StyledTextInput
                        className="m-auto block w-full text-center md:max-w-sm"
                        name="code"
                        placeholder="Enter your unique code"
                        onChange={(event) => setCode(event.target.value.trim())}
                        required
                        value={code}
                    />
                    <StyledButton className="mt-4" type="submit">
                        Enter site
                    </StyledButton>
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
