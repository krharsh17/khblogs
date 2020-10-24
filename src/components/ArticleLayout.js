import React from "react"
import PropTypes from "prop-types"
import {MDXProvider} from "@mdx-js/react"
import styled from "styled-components"
import SEO from "./seo"
import {device} from "./Global"
import TopNav from "./Article/TopNav"
import {DownArrow, HeaderBG, HeaderTitle, Logo, ProfileLink} from "./Article/Header"
import Author from "./Article/Author"
import {CommentBox, Comments} from "./Article/Comments"
import {LikeButton, ShareButtons} from "./Article/Sidebars"
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
	ArticlePre,
	ArticleQuote,
	ArticleTextItalic,
	ArticleTextSpan,
	ArticleTextStrong,
	ArticleTitle
} from "./Article/Content"
import {useAppReady} from "./useAppReady";
import {graphql} from "gatsby";

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

const ArticleLayout = ({children, pageContext}) => {
	const articleData = pageContext.frontmatter;

	const appReady = useAppReady()

	return (
		<>
			<SEO title={articleData.title} description={articleData.intro} image={articleData.imgUrl} keywords={articleData.keywords}/>
			<Loader appReady={appReady}/>
			<TopNav title={articleData.title}/>
			<ArticleHeader>
				<HeaderBG/>
				<HeaderTitle title={articleData.title} length={articleData.time} topic={articleData.topic}
										 date={articleData.date}/>
				<DownArrow/>
				<Logo/>
				<ProfileLink/>
			</ArticleHeader>

			<ArticleBody>
				<ArticleAdSpace>
					<ShareButtons/>
				</ArticleAdSpace>
				<ArticleContentContainer>
					<ArticleTitle>{articleData.title}</ArticleTitle>
					<MDXProvider
						components={{
							h1: ArticleH1,
							h2: ArticleH2,
							p: ArticleTextSpan,
							a: ArticleLink,
							img: ArticleImage,
							code: ArticleCode,
							pre: ArticlePre,
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
					<LikeButton id={articleData.path}/>
				</ArticleAdSpace>
			</ArticleBody>

			<ArticleFooterContainer>
				<Author/>
				<CommentBox id={articleData.path}/>
				<Comments id={articleData.path}/>
			</ArticleFooterContainer>
		</>
	)
}

ArticleLayout.propTypes = {
	children: PropTypes.node.isRequired
}

export default ArticleLayout