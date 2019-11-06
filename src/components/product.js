import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const blue = '#2193B0'
const lightblue = '#6DD5ED'

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`
const Item = styled.li`
  a {
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    background: linear-gradient(90deg, ${blue} 0%, ${lightblue} 100%);
    width: 210px;
    height: 90px;
    margin: 20px 0 0 0;
    text-decoration: none;
    border-radius: 12px;
    font-size: 1.1rem;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
  }
`

const Product = (props) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <List>
          {data.allStrapiProductlist.edges.map((document) =>
            document.node.products.map((product) => {
              if (product.deelvraag == props.deelvraag) {
                return (
                  <Item key={product.id}>
                    <Link to={`/Product_${product.id}`}>{product.titel}</Link>
                  </Item>
                )
              }
            })
          )}
        </List>
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
