import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Body from '../components/body';
import Layout from '../components/layout';
import Seo from '../components/seo';

interface PreWeddingPhotosPageProps {
    data: {
        allS3Object: {
            nodes: Array<{
                localFile: {
                    childImageSharp: {
                        gatsbyImageData: any; // This is passed directly to the GatsbyImage component so the type is not important
                    };
                };
            }>;
        };
    };
}

const PreWeddingPhotosPage: React.FC<PreWeddingPhotosPageProps> = (props) => {
    const { t } = useI18next();

    return (
        <Layout>
            <h1 className="text-center font-raleway text-xl md:text-2xl">{t('page-heading')}</h1>
            <div className="mt-5">
                {props.data.allS3Object.nodes.map((node, index) => (
                    <GatsbyImage
                        alt={t('image-alt', { index: index + 1 })}
                        className="my-2"
                        image={node.localFile.childImageSharp.gatsbyImageData}
                        key={index}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default PreWeddingPhotosPage;

// gatsby-plugin-react-i18next needs this query to be able to generate the correct language-specific pages
export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { ns: { in: ["common", "pre-wedding-photos"] }, language: { eq: $language } }) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
        allS3Object {
            nodes {
                localFile {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                    }
                }
            }
        }
    }
`;

export const Head = () => {
    return (
        <>
            <Body />
            <Seo description="Angela and Zou's pre-wedding photos." title="Pre-Wedding Photos" />
        </>
    );
};
