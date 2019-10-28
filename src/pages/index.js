import React from 'react'
import '../styles/style.css'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Landing from '../components/landing'

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
    <Link to='/page-2/'>Go to page 2</Link>
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
