import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import '../../styles/global.css'

const ArticlesPage = ({ data }) => {
    return (
        <Layout>
            <ul className="no-bullets">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link className="title-text link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover" to={`/articles/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                            <p className="date-text">{node.frontmatter.date}</p>
                        </div>
                        <p classnName="excerpt-text">{node.excerpt}</p>
                    </article>
                ))
            }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort:{ frontmatter: { date: DESC }}) {
            nodes {
            frontmatter {
                title
                date(formatString: "YYYY.MM.DD")
                slug
            }
            id
            excerpt
        }
    }
}
`

export default ArticlesPage