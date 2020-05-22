/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import {MDXProvider} from "@mdx-js/react"
import styled, {ThemeProvider} from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import SEO from './seo';
import {device, lightTheme, darkTheme} from "./../components/Global"
import TopNav from "./../components/Article/TopNav";
import {HeaderBG, HeaderTitle, DownArrow, Logo, ProfileLink} from '../components/Article/Header';
import Author from "../components/Article/Author";
import {CommentBox, Comments} from "../components/Article/Comments";
import {LikeButton, ShareButtons} from "../components/Article/Sidebars";
import {Helmet} from 'react-helmet';
import favicon from '../images/favicon.ico'
import {
    ArticleTitle,
    ArticleTextSpan,
    ArticleLink,
    ArticleImage,
    ArticleCode,
    ArticleH1,
    ArticleH2,
    ArticleTextItalic,
    ArticleTextStrong,
    ArticleQuote,
    ArticleBody, ArticleAdSpace, ArticleContentContainer
} from '../components/Article/Content';

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
  
`;

const ArticleLayout = ({ children }) => {
  const raw = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "MMMM DD, YYYY")
              topic
              time
            }
          }
        }
      }
    }
  `)

  const data = raw.allMdx.edges[0].node.frontmatter;

  
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
      const lsDark = localStorage.getItem('dark') === 'true';
      toggleDarkMode(lsDark);

  }, []);

  const toggleDarkMode = (darkModeBool) => {
      if (darkModeBool === true) {
          setTheme(darkTheme);
      } else {
          setTheme(lightTheme);
      }
      localStorage.setItem('dark', JSON.stringify(darkModeBool));
      setDarkMode(darkModeBool);
  };

  return (
  <ThemeProvider theme={theme}>

    <SEO title = {data.title} />
    <Helmet>
        <link rel="icon" href={favicon} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={"https://blog.krharsh17.vision/?article=" + data.path} />
      <meta property="og:image" content={data.image} />
      <meta property="og:description" content="" />
    </Helmet>
    <TopNav title={data.title} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <div className='article-header'>
      <HeaderBG/>
      <HeaderTitle title={data.title} length={data.time} topic={data.topic}
                    date={data.date} />
      <DownArrow/>
      <Logo/>
      <ProfileLink/>
    </div>
    
    <ArticleBody>
      <ArticleAdSpace>
        <ShareButtons />
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
          blockquote: ArticleQuote,
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
  children: PropTypes.node.isRequired,
}

export default ArticleLayout
