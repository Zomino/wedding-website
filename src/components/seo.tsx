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
            <meta content={data.site.siteMetadata.author} name="author" />
            <meta content={description || data.site.siteMetadata.description} name="description" />
            <title>{title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title}</title>
        </>
    );
};

export default Seo;
