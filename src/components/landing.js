import React from "react"

import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

import { IoIosArrowUp } from "react-icons/io"

const pink = "#E139FF"
const blue = "#2BE5DE"

const LandingWrapper = styled.section`
  height: 100vh;
  width: 100%;
  background: linear-gradient(90deg, ${pink} 0%, ${blue} 100%);
  color: white;
  display: grid;
  grid-template-columns: 10% 7fr 5fr 10%;
  grid-template-rows: 10% 1fr 1fr 1fr 3fr 1fr;
  margin-bottom: 20vh;

  grid-template-areas:
    ". . . ." ". . nav nav" ". title me me"
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

        a {
          text-decoration: none;
          color: white;

          &:hover {
            text-decoration: underline;
          }
        }
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
    a {
      font-size: 1.6em;
      text-decoration: none;
      color: white;

      &:hover {
        text-decoration: underline;
      }
    }
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

const MoveUp = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  border-radius: 50px;
  width: 70px;
  height: 70px;
  background: linear-gradient(90deg, #dd3bff 0%, #7181f2 100%);
  border: none;
  box-shadow: 0px 3px 8px 3px rgba(1, 1, 1, 0.2);
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 3px 8px 3px rgba(1, 1, 1, 0);
    transition: 0.2s;
  }

  a {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
    font-size: 16px;
  }
`

const Landing = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <LandingWrapper id="home">
          <nav>
            <ul>
              <li>
                {" "}
                <a href="#home">Home</a>
              </li>
              <li>
                {" "}
                <a href="#De opdracht.">Opdracht</a>
              </li>
              <li>
                {" "}
                <a href="#Producten.">Producten</a>
              </li>
              <li>
                {" "}
                <a href="#Reflectie.">Reflectie</a>
              </li>
            </ul>
          </nav>
          <h1>Portfolio 2019.</h1>
          <h2>Dylano Hartman.</h2>
          <div className="reading-guide">
            <a href="https://docs.google.com/document/d/1TpoZ7u-8nZuLWqLnoGQMrV9WPpEgIbTGFXg6Ajcg644/edit?usp=sharing">
              <p> De leeswijzer.</p>
            </a>
          </div>

          <div className="me-container">
            <Img
              className="me"
              fixed={data.file.childImageSharp.fixed}
              alt=""
            />
          </div>
          <MoveUp>
            {" "}
            <a href="#home">
              <IoIosArrowUp />
            </a>
          </MoveUp>
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
