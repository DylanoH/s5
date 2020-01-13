import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

const TextSectionWrapper = styled.section`
  grid-column: 2;
  margin-bottom: 15vh;

  p {
    margin-bottom: 20px;
  }

  ul {
    margin-left: 5vw;
  }
`

const TextSection = props => {
  return (
    <TextSectionWrapper id={props.titel}>
      <h1>{props.titel}</h1>
      <ReactMarkdown className="markdown_text" source={props.text} />
    </TextSectionWrapper>
  )
}

export default TextSection
