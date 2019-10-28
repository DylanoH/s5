import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const ProductTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiProduct.titel}</h1>
    <p>{data.strapiProduct.detail}</p>
    <a href={data.strapiProduct.link}>
      <p>zie product hier</p>
    </a>
    <Img fixed={data.strapiProduct.preview.childImageSharp.fixed} />
    <p>{data.strapiProduct.reflection}</p>
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
