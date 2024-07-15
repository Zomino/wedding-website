import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = () => {
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
    `)

    return (
        <>
            {/* Gatsby injects these attributes into the body tag */}
            <body className="bg-elephant-lighter font-light text-center text-elephant-darker" />
            <meta name="author" content={data.site.siteMetadata.author} />
            <meta name="description" content={data.site.siteMetadata.description} />
            <title>{data.site.siteMetadata.title}</title>
        </>
    )
}

export default Seo
