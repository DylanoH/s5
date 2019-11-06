import React from 'react'
import '../styles/style.css'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

import ProductList from '../components/productlist'
import TextSection from '../components/textsection'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <TextSection
        titel={data.strapiDescription.titel}
        text={data.strapiDescription.description}
      />
      <ProductList />
      <TextSection
        titel={data.strapiReflection.titel}
        text={data.strapiReflection.reflection}
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    strapiDescription {
      titel
      id
      description
    }
    strapiReflection {
      id
      titel
      reflection
    }
  }
`
