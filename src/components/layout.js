import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "./reset"
import styled from "styled-components"
import Landing from "../components/landing"

const Main = styled.main`
  display: grid;
  grid-template-columns: 10% 1fr 10%;

  h1 {
    font-size: 4rem;
    margin-bottom: 5vh;
  }

  p {
    margin-left: 5vw;
    font-size: 1.15rem;
  }

  ul {
    margin-left: 5vw;
  }

  .markdown_text {
    max-width: 40vw;
    margin-bottom: 5vh;
  }
`

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Landing />
      <Main>{children}</Main>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
