import React from "react";
import { HeadFC } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import ButtonStyledLink from "../components/button-styled-link";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page not found">
      <ButtonStyledLink className="mx-auto" to="/">
        Go back
      </ButtonStyledLink>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="Not Found" />;
