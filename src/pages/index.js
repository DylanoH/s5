import React from 'react'
import '../styles/style.css'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Landing from '../components/landing'
import ReactMarkdown from 'react-markdown'

const IndexPage = ({ data }) => (
  <Layout>
    <Landing />
    <ul>
      {data.allStrapiProduct.edges.map((document) => (
        <li key={document.node.id}>
          <Link to={`/${document.node.id}`}>{document.node.titel}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiProduct {
      edges {
        node {
          id
          titel
          category
        }
      }
    }
  }
`
