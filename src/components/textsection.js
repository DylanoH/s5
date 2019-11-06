import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const TextSectionWrapper = styled.section`
  grid-column: 2;
  margin-bottom: 20vh;
`

const TextSection = (props) => {
  return (
    <TextSectionWrapper>
      <h1>{props.titel}</h1>
      <ReactMarkdown className='markdown_text' source={props.text} />
    </TextSectionWrapper>
  )
}

export default TextSection
