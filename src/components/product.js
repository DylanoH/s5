import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

const Product = (props) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <ul>
          {data.allStrapiProductlist.edges.map((document) =>
            document.node.products.map((product) => {
              if (product.deelvraag == props.deelvraag) {
                return (
                  <li key={product.id}>
                    <Link to={`/Product_${product.id}`}>{product.titel}</Link>
                  </li>
                )
              }
            })
          )}
        </ul>
      )}
    />
  )
}

export default Product

const query = graphql`
  query ProductQuery {
    allStrapiProductlist(sort: { fields: [products___deelvraag], order: ASC }) {
      edges {
        node {
          id
          products {
            id
            titel
            deelvraag
            category
            arrangement
          }
        }
      }
    }
  }
`
