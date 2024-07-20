import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const WelcomePage = () => {
    return (
        <Layout pageTitle="Welcome">
            <h1 className="sr-only">Welcome</h1>
            <StaticImage
                src="../images/elephant-and-rabbit.png"
                alt="Drawing of an elephant and a rabbit"
                className="w-full"
            />
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
