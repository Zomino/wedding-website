import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

import ButtonStyledLink from '../components/primitives/button-styled-link';

const NotFoundPage = () => {
    return (
        <Layout>
            <h1 className="mt-5 text-center font-raleway text-4xl">
                Not Found
            </h1>
            <ButtonStyledLink className="mt-10" to="/">
                Go back
            </ButtonStyledLink>
        </Layout>
    );
};

export default NotFoundPage;

export const Head = () => (
    <Seo title="Not Found" description="This page does not exist." />
);
