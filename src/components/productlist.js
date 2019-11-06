import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Product from '../components/product'
import styled from 'styled-components'

const ProductWrapper = styled.section`width: 100%;`

const ProductList = ({ data }) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <ProductWrapper>
          <h1>{data.strapiProductlist.titel}</h1>
          <Product deelvraag='probleemstelling' />
          <Product deelvraag='uploadflow' />
          <Product deelvraag='nieuweux' />
        </ProductWrapper>
      )}
    />
  )
}

export default ProductList

const query = graphql`
  query ProductListQuery {
    strapiProductlist {
      titel
      id
    }
  }
`
