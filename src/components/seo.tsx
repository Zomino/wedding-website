import { useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';

interface SeoProps {
    description?: string;
    title?: string;
}

const Seo: React.FC<SeoProps> = ({ description, title }) => {
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

export default Seo;
