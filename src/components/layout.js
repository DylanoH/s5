import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "./reset"
import styled from "styled-components"

const Main = styled.main``

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
