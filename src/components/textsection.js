import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const TextSectionWrapper = styled.section``

const TextSection = (props) => {
  return (
    <StaticQuery
      query={query}
      render={(data) =>
        props.type == 'description' ? (
          <TextSectionWrapper>
            <h1>{data.strapiDescription.titel}</h1>
            <p>{data.strapiDescription.description}</p>
          </TextSectionWrapper>
        ) : props.type == 'reflection' ? (
          <TextSectionWrapper>
            <h1>{data.strapiReflection.titel}</h1>
            <p>{data.strapiReflection.reflection}</p>
          </TextSectionWrapper>
        ) : (
          ''
        )}
    />
  )
}

export default TextSection

const query = graphql`
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
