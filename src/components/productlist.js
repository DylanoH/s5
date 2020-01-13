import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Product from "../components/product"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

const lightpurple = "#B029D8"
const lightblue = "#6DD5ED"

const ProductListWrapper = styled.section`
  grid-column: 2;
  width: 100%;
  margin-bottom: 15vh;
`

const ProductWraper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 60px;
`
const FinalFilesWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`
const FinalFile = styled.li`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    width: 600px;
    height: 110px;
    margin: 20px 0 0 0;
    text-decoration: none;
    border-radius: 12px;
    font-size: 1.5rem;
    font-weight: bold;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    background: linear-gradient(90deg, ${lightpurple} 0%, ${lightblue} 100%);

    &:hover {
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0);
      transition: 0.2s;
    }
  }
`

const ProductList = ({ data }) => {
  const oz1 =
    "Waar liggen er UX problemen in FileFlow voor nieuwe en bestaande gebruikers?"
  const oz2 = "Hoe kunnen we de upload flow verbeteren?"
  const oz3 = "Hoe ervaren gebruikers de nieuwe upload flow?"

  const link1 =
    "https://docs.google.com/document/d/1DfvJL8LDsLsgUzVoWMz2Q1CHGcjY6iUQ2FsnhB_ZnOg/edit?usp=sharing"
  const link2 =
    "https://docs.google.com/document/d/1F20M3gH4oYl7Mc--1AfgePND4UVmQu4kVKYSalPth4Q/edit?usp=sharing"
  const link3 =
    "https://docs.google.com/document/d/14Ei4B0qlakURkgHd54Ugr60mNmicN751cOW7CVbQEAw/edit?usp=sharing"

  const title1 = "Probleemstelling onderzoek"
  const title2 = "Upload Flow onderzoek"
  const title3 = "Nieuwe UX onderzoek"
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

          <FinalFilesWrapper>
            <FinalFile>
              <a
                href="https://docs.google.com/document/d/1c0rIvuZuGxbR2xBgo8aF9G95KWwJtWdb3_WIbMFoTmc/preview"
                target="_blank"
              >
                Direct naar het final onderzoek
              </a>
            </FinalFile>
            <FinalFile>
              <a
                href="https://docs.google.com/document/d/1azICZGqaH47O_74qYDhZBH0Tey8xKTrOLZw-uPD1RWc/preview"
                target="_blank"
              >
                Direct naar het final prototype
              </a>
            </FinalFile>
          </FinalFilesWrapper>

          <ProductWraper>
            <Product
              deelvraag="probleemstelling"
              link={link1}
              vraag={oz1}
              title={title1}
            />
            <Product
              deelvraag="uploadflow"
              link={link2}
              vraag={oz2}
              title={title2}
            />
            <Product
              deelvraag="nieuweux"
              link={link3}
              vraag={oz3}
              title={title3}
            />
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
