import React from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"

const BlogPage = ({data}) => {
    return (
        <Layout>
            <h1>My posts</h1>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={ post.node.id }>
                    <h3>{post.node.frontmatter.title}</h3>
                    <p>{post.node.excerpt}</p>
                    <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                    <br />
                    <Link to={post.node.frontmatter.path}>Read more</Link>
                    <br />
                    <br />
                    <hr/>
                </div>
            ))}
        </Layout>
    )
}

export const PageQuery = graphql`
    query blogIndexQuery {
        
            allMarkdownRemark {
              edges {
                  node {
                    id
                    frontmatter {
                    path
                    title
                    date
                    author
                  }
                  excerpt
                }
            }
            }
        }
    
    `

export default BlogPage