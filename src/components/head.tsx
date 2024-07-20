import { useStaticQuery, graphql } from "gatsby";
import * as React from "react";


interface HeadProps {
  description?: string;
  title?: string;
}

const Head: React.FC<HeadProps> = ({ description, title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);

  return (
    <>
      {/* Gatsby injects these attributes into the body tag */}
      <body className="p-10" />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta
        name="description"
        content={description || data.site.siteMetadata.description}
      />
      <title>
        {title
          ? `${title} | ${data.site.siteMetadata.title}`
          : data.site.siteMetadata.title}
      </title>
    </>
  );
};

export default Head;
