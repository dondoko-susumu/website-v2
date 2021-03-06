import React from "react"
import { graphql } from "gatsby"

import Link from "../components/localizedLink"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useTranslations from "../components/useTranslations"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const {
    siteTitle,
  } = useTranslations()
  const post = data.markdownRemark
  const { previous, next, locale } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        lang={locale}
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.image.publicURL}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        {(previous !== null || next !== null) ? (
          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={`/blog/${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`/blog/${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        ) : null}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>
      <footer>
        <Bio />
      </footer>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query Post($locale: String!, $title: String!, $dateFormat: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: $dateFormat)
        description
        image {
          publicURL
        }
      }
    }
  }
`
