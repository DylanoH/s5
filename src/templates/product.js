import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

const ProductTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiProduct.titel}</h1>
    <ReactMarkdown source={data.strapiProduct.detail} />
    <a href={data.strapiProduct.link}>
      <p>zie product hier</p>
    </a>
    <Img fixed={data.strapiProduct.preview.childImageSharp.fixed} />
    <ReactMarkdown source={data.strapiProduct.reflection} />
  </Layout>
)

export default ProductTemplate

export const query = graphql`
  query ProductTemplate($id: String!) {
    strapiProduct(id: { eq: $id }) {
      titel
      detail
      reflection
      link
      preview {
        childImageSharp {
          fixed(width: 500, height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
