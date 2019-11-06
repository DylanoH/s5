import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import ProductLayout from '../components/productlayout'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const ProductPageSection = styled.section`
  grid-column: 2;
  grid-row: 2;

  .image_product {
    margin-bottom: 20vh;
  }
`

const BackButton = styled.div`
  grid-column: 1;
  grid-row: 1;
  background-color: blue;
  .button_back {
    display: flex;
    width: 100%;
    height: 100%;
  }
`

const ProductTemplate = ({ data }) => (
  <ProductLayout>
    <BackButton>
      <Link className='button_back' to={`/`} />
    </BackButton>
    <ProductPageSection>
      <h1>{data.strapiProduct.titel}</h1>
      <ReactMarkdown
        className='markdown_text'
        source={data.strapiProduct.detail}
      />
      <a href={data.strapiProduct.link}>
        <p>zie product hier</p>
      </a>
      <Img
        className='image_product'
        fixed={data.strapiProduct.preview.childImageSharp.fixed}
      />
      <ReactMarkdown
        className='markdown_text'
        source={data.strapiProduct.reflection}
      />
    </ProductPageSection>
  </ProductLayout>
)

export default ProductTemplate

export const query = graphql`
  query ProductTemplate($id: String!) {
    strapiProduct(id: { eq: $id }) {
      id
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
