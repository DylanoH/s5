import React from 'react'
import '../styles/style.css'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Landing from '../components/landing'
import ProductList from '../components/productlist'
import TextSection from '../components/textsection'
import ReactMarkdown from 'react-markdown'

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <TextSection type='description' />
      <ProductList />
      <TextSection type='reflection' />
    </Layout>
  )
}

export default IndexPage
