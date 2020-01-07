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

  p {
    margin-bottom: 20px;
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

const DocumentLink = styled.a`
  font-size: 1.2em;
  color: grey;
  text-decoration: underline;
  transition: 0.2s;
  margin-bottom: 5vh;
  display: block;
  &:hover {
    color: black;
    transition: 0.2s;
  }
`

const ProductPreview = styled.iframe`
  height: 100%;
  width: 700px;
  border: 0;

  grid-column: 3;
  grid-row: 2;
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
      <h2>Details</h2>
      <ReactMarkdown
        className="markdown_text"
        source={data.strapiProduct.detail}
      />
      <h2>Document</h2>
      <DocumentLink
        href={
          "https://docs.google.com/document/d/" +
          data.strapiProduct.link +
          "/preview"
        }
        target="_blank"
      >
        Open document in externe tab
      </DocumentLink>

      <h2>Reflectie</h2>
      <ReactMarkdown
        className="markdown_text"
        source={data.strapiProduct.reflection}
      />
    </ProductPageSection>
    <ProductPreview
      src={
        "https://docs.google.com/document/d/" +
        data.strapiProduct.link +
        "/preview"
      }
      frameborder="0"
    />
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
