import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import ProductLayout from "../components/productlayout"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

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
  .button_back {
    display: flex;
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;

    a {
      width: 100%;
    }
  }
`

const ProductPreview = styled.iframe`
  height: 700px;
  width: 600px;
  border: 0;
  margin-bottom: 20px;
  margin-top: 20px;
`

const ProductTemplate = ({ data }) => (
  <ProductLayout>
    <BackButton>
      <Link className="button_back" to={`/`}>
        {/* <Img fluid={data.file.childImageSharp.fluid}></Img> */}
        <img width="100px" src={data.file.childImageSharp.fluid.src} alt="" />
      </Link>
    </BackButton>
    <ProductPageSection>
      <h1>{data.strapiProduct.titel}</h1>
      <ReactMarkdown
        className="markdown_text"
        source={data.strapiProduct.detail}
      />

      <p>
        <a
          href={
            "https://docs.google.com/document/d/" +
            data.strapiProduct.link +
            "/preview"
          }
        >
          zie product
        </a>
      </p>

      <ProductPreview
        src={
          "https://docs.google.com/document/d/" +
          data.strapiProduct.link +
          "/preview"
        }
        frameborder="0"
      />
      <ReactMarkdown
        className="markdown_text"
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
    file(relativePath: { eq: "back.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
