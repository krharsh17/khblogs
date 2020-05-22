import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {device} from "../Global";
import articlesList from "../../content/articles-list.json";
import newspaper from '../../images/newspaper.png';

const HomeBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-contents: flex-start;
`;

const LatestPostsTitle = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 24px;
    color: ${props => props.theme.dark};
    
    @media ${device.tablet} {
        margin-left: 10%;
        margin-right: 10%;
        width: 80%;
        font-size: 40px;
    }
`;

const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    @media ${device.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0 10%;
        justify-content: space-between;
    }
`;

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 0 5%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 48px;
    
    @media ${device.tablet} {
        width: 32%;
        padding: 0;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        margin-bottom: 96px;
    }
`;

const PostImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 4px;
`;

const PostTitle = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
    color: ${props => props.theme.dark};
    font-size: 32px;
    margin-top: 4px;
    margin-bottom: 8px; 
    
    @media ${device.tablet} {   
        font-weight: 600;
    }
    
    
`;

const PostCategory = styled.div`
    margin-top: 16px;
    color: ${props => props.theme.secondary};
    font-family: 'Ropa Sans', sans-serif;
    font-size: 20px;
`

const PostRead = styled.a`
    color: ${props => props.theme.secondary};
    font-family: 'Ropa Sans', sans-serif;
    font-size: 22px;
    width: 112x;
    text-decoration: none;
    border-bottom: 2px solid ${props => props.theme.secondary};
    
    @media ${device.tablet} {
        color: ${props => props.theme.dark};
        transition-duration: 0.4s;
        border-bottom: 2px solid ${props => props.theme.dark};
        
        &:hover{
            color: ${props => props.theme.secondary};
            border-bottom: 2px solid ${props => props.theme.secondary};

        }
    }

`;

const NewsLetterContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.dark};
    border-radius: 12px;
    margin: 0 5%;
    width: 80%;
    padding: 20px 5%;
    margin-bottom: 48px;
    justify-content: center;
    
    @media ${device.laptop} {
        border-radius: 16px;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
    }
`;

const NewsLetterTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    
    @media ${device.laptop} {
        justify-content: flex-start;
    }
`;

const NewsLetterTitle = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    font-size: 36px;
    color: ${props => props.theme.light};
    text-align: center;
    
    @media ${device.laptop}{
        text-align: left;   
        width: 600px; 
        font-size: 64px;
    }
`;

const NewsLetterSubHeader = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    margin-top: 16px;
    font-size: 20px;
    color: ${props => props.theme.light};
    text-align: center;
    
    @media ${device.laptop}{
        text-align: left;   
        width: 300px; 
        align-self: flex-start;
    }

`;

const NewsLetterCard = styled.div`
    height: 275px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.light};
    margin-top: 48px;
    
    @media ${device.laptop}{
        height: 300px; 
        margin: 36px 0;
    }

`;

const NewspaperImage = styled.div`
    background-image: url('https://source.unsplash.com/wyN0QFDiXw0/600x400');
    width: 100%;
    height: 196px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    @media ${device.laptop} {
        height: 230px;
        width: 360px;
    }

`;

const NewsLetterSubscribe = styled.div`
    font-family: 'Ropa Sans', sans-serif;
    color: ${props => props.theme.dark};
    font-size: 20px;
    margin: 12px 0;
    text-align: center;
    
    @media ${device.laptop} {
        margin: 8px 0;
    }

`;

const NewsLetterInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 12px;
`;

const NewsLetterInput = styled.input`
    border:none;
    border-bottom: 1px solid ${props => props.theme.dark};
    color: ${props => props.theme.dark};
    font-family: 'Ropa Sans', sans-serif;
    font-size: 18px;
    width: 256px;
    background-color: ${props => props.theme.light};

`;
const NewsLetterButton = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
    
    @media ${device.laptop} {
        width: 28px;
        height: 28px;
    }
`;

const HomeBody = () => {
    const [state, setState] = useState({articles: []});

    let mainArticlesCount = 3;

    if (window.innerWidth > parseInt(device.mobileL.split('px')[0].split(' ')[1]))
        mainArticlesCount = 6;

    useEffect(() => {
        setState({articles: articlesList.allArticles});
    }, []);

    return (
        <HomeBodyContainer>
            <LatestPostsTitle>New Blog Posts</LatestPostsTitle>
            <PostsContainer>

                {
                    state.articles.slice(0, mainArticlesCount).map((article, index) => {
                        return <PostContainer key={index}>
                            <PostImage src={(article !== undefined ? article.imgUrl : '')}/>
                            <PostCategory>{(article !== undefined ? article.topic : '')}</PostCategory>
                            <PostTitle>{(article !== undefined ? article.title : '')}</PostTitle>
                            <PostRead
                                href={'?article=' + (article !== undefined ? article.id : '')}>Read
                                Article</PostRead>
                        </PostContainer>
                    })
                }


            </PostsContainer>

            <NewsLetterContainer>
                <NewsLetterTitleContainer>
                    <NewsLetterTitle>Want to keep yourself updated?</NewsLetterTitle>
                    <NewsLetterSubHeader>Only important stuff, no spam 🚫</NewsLetterSubHeader>
                </NewsLetterTitleContainer>
                <NewsLetterCard>
                    <NewspaperImage/>
                    <NewsLetterSubscribe>Subscribe to my newsletter</NewsLetterSubscribe>
                    <NewsLetterInputContainer>
                        <NewsLetterInput placeholder={'Your Email Address'}/>
                        <NewsLetterButton src={newspaper}/>
                    </NewsLetterInputContainer>
                </NewsLetterCard>
            </NewsLetterContainer>

            <PostsContainer>

                {
                    state.articles.slice(mainArticlesCount, mainArticlesCount + 3).map((article, index) => {
                        return <PostContainer key={index}>
                            <PostImage src={(article !== undefined ? article.imgUrl : '')}/>
                            <PostCategory>{(article !== undefined ? article.topic : '')}</PostCategory>
                            <PostTitle>{(article !== undefined ? article.title : '')}</PostTitle>
                            <PostRead
                                href={'?article=' + (article !== undefined ? article.id : '')}>Read
                                Article</PostRead>
                        </PostContainer>
                    })
                }


            </PostsContainer>
        </HomeBodyContainer>
    );
}

export default HomeBody;