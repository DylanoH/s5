import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

//onderzoek
const blue = "#2193B0"
const lightblue = "#6DD5ED"

//beheer
const pink = "#BF227A"
const lightpink = "#F44FBF"

//advies
const purple = "#6401FF"
const lightpurple = "#B029D8"

//realisatie
const orange = "#F12711"
const lightorange = "#F5AF19"

//ontwerp
const green = "#56AB2F"
const lightgreen = "#A8E063"

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
    /* background: linear-gradient(90deg, ${blue} 0%, ${lightblue} 100%); */
    width: 210px;
    height: 90px;
    margin: 20px 0 0 0;
    text-decoration: none;
    border-radius: 12px;
    font-size: 1.1rem;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
  }
`

const ConditionalItem = styled(Item)`
  a {
    ${props =>
      (props.category === `analyse` &&
        `background: linear-gradient(90deg, ${blue} 0%, ${lightblue} 100%);`) ||
      (props.category === `beheer` &&
        `background: linear-gradient(90deg, ${pink} 0%, ${lightpink} 100%);`) ||
      (props.category === `advies` &&
        `background: linear-gradient(90deg, ${purple} 0%, ${lightpurple} 100%);`) ||
      (props.category === `realisatie` &&
        `background: linear-gradient(90deg, ${orange} 0%, ${lightorange} 100%);`) ||
      (props.category === `ontwerp` &&
        `background: linear-gradient(90deg, ${green} 0%, ${lightgreen} 100%);`)}
  }
`

const Product = props => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <List>
          {data.allStrapiProductlist.edges.map(document =>
            document.node.products.map(product => {
              if (product.deelvraag == props.deelvraag) {
                console.log(product.category)
                return (
                  <ConditionalItem category={product.category} key={product.id}>
                    <Link to={`/Product_${product.id}`}>{product.titel}</Link>
                  </ConditionalItem>
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
