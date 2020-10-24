import styled from "styled-components"
import {device} from "../Global"
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter"
import {railscasts} from "react-syntax-highlighter/dist/cjs/styles/hljs"
import {Typography} from "@material-ui/core";
import {useTheme} from "../useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const ArticleTitle = styled.p`
    position: relative;
    margin-top: 72px;
    width: 100%;
    font-size: 48px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    line-height: 48px;
    text-align: start;
    color: ${props => props.theme.dark};
`

const ArticleTextSpan = ({children}) => {
	const theme = useTheme()
	return <><Typography variant={'body1'} component={'p'}
											 style={{color: theme.dark, margin: "4px 0", fontSize: '20px'}}>{children}</Typography>
		<br/></>
}


const ArticleTextItalic = ({children}) => {
	const theme = useTheme()
	return <><Typography variant={'body1'} component={'span'}
											 style={{color: theme.dark, margin: "4px 0", fontSize: '20px', fontStyle: 'italic'}}>{children}</Typography>
		<br/></>
}

const ArticleTextStrong = ({children}) => {
	const theme = useTheme()
	return <><Typography variant={'body1'} component={'span'}
											 style={{color: theme.dark, margin: "4px 0", fontSize: '20px', fontWeight: 600}}>{children}</Typography>
		<br/></>
}

const ArticleLink = styled.a`
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.1em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in, color 0.25s ease-in;
    text-decoration: none;
    color: ${props => props.theme.dark};
    
    &:hover {   
        background-size: 100% 1.2em;
        color: #1B1926;
    }
`


const ArticleImage = styled.img`
    height: 480px;
    width: 100%;
    object-fit: contain;
    object-position: center;
    align-self: center;
    
    @media ${device.tablet} {
        width: 100%;
    }

`

const ArticlePre = (props) => {
	return (
		<SyntaxHighlighter
			language={props.children.props.className !== undefined && props.children.props.className.split("-")[1] !== undefined ? props.children.props.className.split("-")[1] : "javascript"}
			wrapLines="true" style={railscasts}
			customStyle={{padding: '16px', fontSize: '16px', fontFamily: "'Source Code Pro', monospace"}}>
			{props.children.props.children}
		</SyntaxHighlighter>
	)
}

const ArticleCode = styled.div`
    background-color: ${props => props.theme.code_background};
    color: ${props => props.theme.code_text};
    overflow-x: auto;
    margin-left: 2%;
    padding: 20px 24px;
    margin-bottom: 36px;
    white-space: pre;
    text-align: left;
    width: 75vw;
    font-family: 'Source Code Pro', sans-serif;
    
    @media ${device.tablet}{
        width: 90%;
    }
`

const ArticleQuote = ({children}) => {
	console.log(children)
	const theme = useTheme()
	return <ArticleQuoteContainer>
		<p>
			{children.props.children}
		</p>
	</ArticleQuoteContainer>
}

const ArticleQuoteContainer = styled.div`
    border-left: 16px solid ${props => props.theme.secondary};
    font-size: 40px;

    p {
        color: ${props => props.theme.secondary};
        font-family: 'Ropa Sans', sans-serif;
        font-size: 40px;
        text-align: left;
        padding: 4px 24px;
        line-height: 1.2;
    }

    margin-left: 2%;
    margin-bottom: 36px;
    width: 75vw;

    @media ${device.tablet}{
        width: 90%;
    }
`

const ArticleH1 = ({children}) => {
	const theme = useTheme()
	return <Typography variant={'h4'} component={'p'} style={{color: theme.dark, marginBottom: 8}}>{children}</Typography>
}

const ArticleH2 = ({children}) => {
	const theme = useTheme()
	return <Typography variant={'h5'} component={'p'}
										 style={{color: theme.dark, marginBottom: 8, fontWeight: 600}}>{children}</Typography>
}

const ArticleH3 = ({children}) => {
	const theme = useTheme()
	const isDesktop = useMediaQuery("@media " + device.mobileS)
	console.log(isDesktop)
	return <Typography variant={isDesktop ? 'h5' : 'h6'} component={'div'}
										 style={{color: theme.dark, fontWeight: 600}}>{children}</Typography>
}

const ArticleContentContainer = styled.div`
    padding: 0 5vw;
    margin: 0;
    width: 85vw;
    
    @media ${device.tablet} {
        padding: 0;
        width: 50vw;
    }

`

const ArticleAdSpace = styled.div`
    position: relative;
    height: 200px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    
    @media ${device.tablet} {
        height: 90vh;
        position: sticky;
        top: 20px;
    }
`

const ArticleBody = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -48px;
    padding-bottom: 48px;
    background-color: ${props => props.theme.light};
    
    @media ${device.tablet} {
        align-items: flex-start;
        flex-direction: row;
        justify-content: space-evenly;
    }

`

export {
	ArticleTitle,
	ArticleTextSpan,
	ArticleLink,
	ArticleImage,
	ArticleCode,
	ArticlePre,
	ArticleH1,
	ArticleH2,
	ArticleH3,
	ArticleContentContainer,
	ArticleAdSpace,
	ArticleBody,
	ArticleQuote,
	ArticleTextItalic,
	ArticleTextStrong
}