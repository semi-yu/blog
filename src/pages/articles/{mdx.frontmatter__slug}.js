import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const Article = ({ data, children }) => {
    return (
        <Layout>
            <div>
                <div className="title-text" id="article-title">
                   <p>{data.mdx.frontmatter.title}</p>
                </div>
                <div className="position-relative">
                    <p className="date-text">{data.mdx.frontmatter.date}</p>
                </div>
                <div>
                    {children}
                </div>
            </div>            
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "YYYY.MM.DD")
            }
        }
    }
`

export default Article