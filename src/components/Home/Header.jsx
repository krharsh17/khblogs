import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { device } from "../Global"
import { graphql, useStaticQuery } from "gatsby"

const TopArticlesRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-left: 5%;
  margin-right: 5%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  @media ${device.tablet} {
    margin-left: 10%;
    margin-right: 10%;
  }
`

const MainArticleCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media ${device.tablet} {
    width: 55%;
  }
`

const SideArticlesCol = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 42%;
  }
`

const SideArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: none;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 40px;
`

const ArticleCategory = styled.div`
  color: ${props => props.theme.secondary};
  font-family: "Ropa Sans", sans-serif;
  font-size: 16px;

  @media ${device.laptop} {
    font-size: 20px;
  }
`

const MainArticleTitle = styled.div`
  color: ${props => props.theme.dark};
  font-family: "Source Sans Pro", sans-serif;
  font-size: 40px;
  font-weight: 700;
`

const MainArticleText = styled.div`
  color: ${props => props.theme.dark};
  font-family: "Source Sans Pro", sans-serif;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 24px;
`

const MainArticleImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 4px;
  margin-bottom: 20px;
  object-fit: cover;
  object-position: center;

  @media ${device.laptop} {
    max-width: 700px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
`

const SideArticleImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 4px;
  object-fit: cover;
  object-position: center;

  @media ${device.laptop} {
    width: 180px;
    height: auto;
  }
`

const SideArticleTitle = styled.div`
  color: ${props => props.theme.dark};
  font-family: "Source Sans Pro", sans-serif;
  font-size: 20px;
  font-weight: 700;

  @media ${device.mobileL} {
    font-size: 24px;
  }

  @media ${device.laptop} {
    font-size: 28px;
  }
`

const SideArticleText = styled.div`
  color: ${props => props.theme.dark};
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.1;
  max-height: 4.4em;
  text-overflow: ellipsis;
  overflow-y: hidden;

  @media ${device.mobileL} {
    font-size: 18px;
    max-height: 3.3em;
  }

  @media ${device.laptop} {
    font-size: 18px;
    max-height: 4.4em;
  }
`

const ArticleLink = styled.a`
    text-decoration: none;

    &:hover {
        text-decoration: underline ${props => props.theme.primary} solid;
     }
  }
    
    
`

const TopArticles = () => {
  const [state, setState] = useState({ articles: [] })

  const raw = useStaticQuery(graphql`
    {
      allMdx(
        sort: { fields: [frontmatter___articleNumber], order: DESC }
        limit: 4
      ) {
        nodes {
          frontmatter {
            title
            path
            topic
            intro
            imgUrl
            articleNumber
            time
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (state.articles.length === 0)
      setState({
        articles: raw.allMdx.nodes.map(elem => elem.frontmatter),
      })
  }, [state.articles.length])

  return (
    <TopArticlesRow>
      <MainArticleCol>
        <MainArticleImage
          src={state.articles[0] !== undefined ? state.articles[0].imgUrl : ""}
        />
        <ArticleCategory>
          {state.articles[0] !== undefined ? state.articles[0].topic : ""}
        </ArticleCategory>
        <ArticleLink
          href={state.articles[0] !== undefined ? state.articles[0].path : ""}
        >
          <MainArticleTitle>
            {state.articles[0] !== undefined ? state.articles[0].title : ""}
          </MainArticleTitle>
        </ArticleLink>
        <MainArticleText>
          {state.articles[0] !== undefined ? state.articles[0].intro : ""}
        </MainArticleText>
      </MainArticleCol>

      <SideArticlesCol>
        {state.articles.slice(1, 4).map(article => (
          <SideArticleContainer>
            <div>
              <ArticleLink
                href={article !== undefined ? state.articles[0].path : ""}
              >
                <SideArticleImage
                  src={article !== undefined ? article.imgUrl : ""}
                />
              </ArticleLink>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <ArticleCategory>
                {article !== undefined ? article.topic : ""}
              </ArticleCategory>
              <ArticleLink href={article !== undefined ? article.path : ""}>
                <SideArticleTitle>
                  {article !== undefined ? article.title : ""}
                </SideArticleTitle>
              </ArticleLink>
              <SideArticleText>
                {article !== undefined ? article.intro : ""}
              </SideArticleText>
            </div>
          </SideArticleContainer>
        ))}
      </SideArticlesCol>
    </TopArticlesRow>
  )
}
export { TopArticles }
