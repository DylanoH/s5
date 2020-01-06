import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Product from "../components/product"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

const ProductListWrapper = styled.section`
  grid-column: 2;
  width: 100%;
  margin-bottom: 20vh;
`

const ProductWraper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const ProductList = ({ data }) => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <ProductListWrapper id={data.strapiProductlist.titel}>
          <h1>{data.strapiProductlist.titel}</h1>
          <ReactMarkdown
            className="markdown_text"
            source={data.strapiProductlist.detail}
          />
          <ProductWraper>
            <Product deelvraag="probleemstelling" />
            <Product deelvraag="uploadflow" />
            <Product deelvraag="nieuweux" />
          </ProductWraper>
        </ProductListWrapper>
      )}
    />
  )
}

export default ProductList

const query = graphql`
  query ProductListQuery {
    strapiProductlist {
      titel
      detail
      id
    }
  }
`
