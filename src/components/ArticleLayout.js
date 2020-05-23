import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import styled, { ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "./seo"
import { darkTheme, device, lightTheme } from "./Global"
import TopNav from "./Article/TopNav"
import { DownArrow, HeaderBG, HeaderTitle, Logo, ProfileLink } from "./Article/Header"
import Author from "./Article/Author"
import { CommentBox, Comments } from "./Article/Comments"
import { LikeButton, ShareButtons } from "./Article/Sidebars"
import { Helmet } from "react-helmet"
import favicon from "../images/favicon.ico"
import Loader from "./Loader"
import "./layout.css"
import {
  ArticleAdSpace,
  ArticleBody,
  ArticleCode,
  ArticleContentContainer,
  ArticleH1,
  ArticleH2,
  ArticleImage,
  ArticleLink,
  ArticleQuote,
  ArticleTextItalic,
  ArticleTextSpan,
  ArticleTextStrong,
  ArticleTitle
} from "./Article/Content"

const ArticleFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: ${props => props.theme.light};
  margin-top: 48px;
  
  @media ${device.tablet} {
    margin-top: 24px;
  }
  
`

const ArticleHeader = styled.div`
    height: 100vh;
    overflow-x: hidden;
    position: relative;
`

const ArticleLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  const [data, setData] = useState({ title: "" })
  const [theme, setTheme] = useState(lightTheme)
  const [appReady, setAppReady] = useState(false);

  const raw = useStaticQuery(graphql`
    query {
      allMdx {
          nodes {
            frontmatter  {
              title
              path
              date(formatString: "MMMM DD, YYYY")
              topic
              time
            }
          
        }
      }
    }
  `)

  useEffect(() => {
    const currUrl = window.location.href
    raw.allMdx.nodes.forEach((elem) => {
      if (currUrl.endsWith(elem.frontmatter.path) || currUrl.endsWith(elem.frontmatter.path + "/"))
        setData(elem.frontmatter)
    })
    const lsDark = localStorage.getItem("dark") === "true"
    toggleDarkMode(lsDark)
    setAppReady(true)


  }, [raw.allMdx.nodes])

  const toggleDarkMode = (darkModeBool) => {
    if (darkModeBool === true) {
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
    localStorage.setItem("dark", JSON.stringify(darkModeBool))
    setDarkMode(darkModeBool)
  }


  return (
    <ThemeProvider theme={theme}>

      <SEO title={data.title}/>
      <Helmet>
        <link rel="icon" href={favicon}/>
        <meta property="og:type" content="article"/>
        <meta property="og:url"
              content={"https://blog.krharsh17.vision/?article=" + data.path}/>
        <meta property="og:image" content={data.image}/>
        <meta property="og:description" content=""/>
      </Helmet>
      <Loader appReady={appReady}/>
      <TopNav title={data.title} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <ArticleHeader>
        <HeaderBG/>
        <HeaderTitle title={data.title} length={data.time} topic={data.topic}
                     date={data.date}/>
        <DownArrow/>
        <Logo/>
        <ProfileLink/>
      </ArticleHeader>

      <ArticleBody>
        <ArticleAdSpace>
          <ShareButtons/>
        </ArticleAdSpace>
        <ArticleContentContainer>
          <ArticleTitle>{data.title}</ArticleTitle>
          <MDXProvider
            components={{
              h1: ArticleH1,
              h2: ArticleH2,
              p: ArticleTextSpan,
              a: ArticleLink,
              img: ArticleImage,
              code: ArticleCode,
              ul: ArticleTextSpan,
              ol: ArticleTextSpan,
              em: ArticleTextItalic,
              strong: ArticleTextStrong,
              blockquote: ArticleQuote
            }}>
            {children}
          </MDXProvider>
        </ArticleContentContainer>
        <ArticleAdSpace>
          <LikeButton id={data.path}/>
        </ArticleAdSpace>
      </ArticleBody>

      <ArticleFooterContainer>
        <Author/>
        <CommentBox id={data.path}/>
        <Comments id={data.path}/>
      </ArticleFooterContainer>

    </ThemeProvider>
  )
}

ArticleLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default ArticleLayout
