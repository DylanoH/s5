import React from 'react'

import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'

const pink = '#E139FF'
const blue = '#2BE5DE'

const LandingWrapper = styled.section`
  height: 100vh;
  width: 100%;
  background: linear-gradient(90deg, ${pink} 0%, ${blue} 100%);
  color: white;
  font-family: Nunito;
  display: grid;
  grid-template-columns: 10% 7fr 5fr 10%;
  grid-template-rows: 10% 1fr 1fr 1fr 3fr 1fr;

  grid-template-areas: ". . . ." ". . nav nav" ". title me me"
    ". subtitle me me " ". reading-guide me me " ". . . . ";

  nav {
    grid-area: nav;
    padding-left: 20px;

    ul {
      display: flex;

      list-style: none;
      padding: 0;
      font-size: 1.6em;
      font-weight: bold;

      li {
        padding-left: 15px;
      }
    }
  }

  h1 {
    font-size: 6em;
    font-weight: black;

    grid-area: title;
  }

  h2 {
    font-size: 4em;
    grid-area: subtitle;
    font-weight: bold;
  }

  .reading-guide {
    grid-area: reading-guide;
    font-size: 1.6em;
    text-decoration: none;
    color: white;
  }

  .me-container {
    grid-area: me;
    padding-left: 20px;

    .me {
      border-radius: 50%;
      box-shadow: 0px 3px 8px 3px rgba(1, 1, 1, 0.2);
    }
  }
`

const Landing = () => {
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <LandingWrapper>
          <nav>
            <ul>
              <li>Home</li>
              <li>Opdracht</li>
              <li>Producten</li>
              <li>Reflectie</li>
            </ul>
          </nav>
          <h1>Portfolio 2019.</h1>
          <h2>Dylano Hartman.</h2>
          <a className="reading-guide" href='https://drive.google.com/open?id=1G5KKz5gv0A9wNbwLWN6rOaNJdwZ8pDEL'>
            <p> De leeswijzer.</p>
          </a>
          <div className='me-container'>
            <Img
              className='me'
              fixed={data.file.childImageSharp.fixed}
              alt=''
            />
          </div>
        </LandingWrapper>
      )}
    />
  )
}

export default Landing

const query = graphql`
  query LandingQuery {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
