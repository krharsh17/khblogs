import styled from "styled-components";
import {device} from "../Global";

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
`;

const ArticleTextSpan = styled.p`
    text-align: start;
    font-size: 22px;
    font-weight: 400;
    line-height: 36px;
    color: ${props => props.theme.dark};
    white-space: pre-wrap;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 24px;
    &:hover {
        background-size: 100% 88%;
    }
`;

const ArticleTextItalic = styled.span`
    text-align: start;
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    color: ${props => props.theme.dark};
    white-space: pre-wrap;
    font-family: 'Source Sans Pro', sans-serif;
    font-style: italic;
`;

const ArticleTextStrong = styled.span`
    text-align: start;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
    color: ${props => props.theme.dark};
    white-space: pre-wrap;
    font-family: 'Source Sans Pro', sans-serif;
`;

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
`;


const ArticleImage = styled.img`
    height: auto;
    width: 85vw;
    
    @media ${device.tablet} {
        width: 100%;
    }

`;


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
`;

const ArticleQuote = styled.div`
    border-left: 16px solid ${props => props.theme.dark50};

    p {
        color: ${props => props.theme.dark50};
        font-family: 'Ropa Sans', sans-serif;
        font-size: 40px;
        text-align: left;
        padding: 4px 24px;
        line-height: 1.2;
    }
    
    margin-left: 2%;
    margin-bottom: 36px;
    white-space: pre;
    width: 75vw;
    
    @media ${device.tablet}{
        width: 90%;
    }
`;

const ArticleH1 = styled.h1`
    text-align: left;
    color: ${props => props.theme.dark};
    margin-top: 48px;
    font-family: 'Source Sans Pro';

`;

const ArticleH2 = styled.h2`
    text-align: left;
    color: ${props => props.theme.dark};
    margin-top: 48px;
    font-family: 'Source Sans Pro';

`;

const ArticleContentContainer = styled.div`
    padding: 0 5vw;
    margin: 0;
    width: 85vw;
    
    @media ${device.tablet} {
        padding: 0;
        width: 50vw;
    }

`;

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
`;

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

`;

export {
    ArticleTitle,
    ArticleTextSpan,
    ArticleLink,
    ArticleImage,
    ArticleCode,
    ArticleH1,
    ArticleH2,
    ArticleContentContainer,
    ArticleAdSpace,
    ArticleBody,
    ArticleQuote,
    ArticleTextItalic,
    ArticleTextStrong
};