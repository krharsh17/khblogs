import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share";
import unliked from '../../images/like_light.svg';
import liked from '../../images/like_dark.svg';
import firebase from "../Firebase";

const LikePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans", sans-serif;
  font-weight: bold;
  font-size: 14px;
  margin: 4px 0;
  color: ${props => props.theme.dark};

`;

const LikeImage = styled.img`
  width: 72px;
  height: 72px;
  border: 1px solid #CACACA;
  border-radius: 100px;
  padding: 24px;
  margin-bottom: 16px;
  transition-duration: 0.2s;

  &:hover{
    box-shadow: 0 0 16px #cacaca;
    border: 1px solid #b0b0b0;
  }

  &:active{
    box-shadow: 0 0 16px #e53539;
    border: 1px solid #aa2729;
  }

`;

const LikeButton = (props) => {
    const [likes, setLikes] = useState('');
    const [isLiked, setLiked] = useState(false);

    console.log(props.id);

    useEffect(() => {
        firebase.database().ref('articles/' + props.id + '/likes')
            .once('value')
            .then(snapshot => {
                setLikes(snapshot.val() !== null ? snapshot.val() : 0);
            });
    }, []);


    function like() {
        setLikes(likes + 1);
        if (!isLiked)
            setLiked(true);
        firebase.database().ref('articles/' + props.id + '/likes')
            .transaction((currentLikes) => {
                return (currentLikes || 0) + 1;
            }).then(r => {

        });
    }

    return (
        <LikePanel>
            <LikeImage src={isLiked ? liked : unliked} onClick={like}/>
            {likes + ' likes'}
        </LikePanel>
    );
}

const ShareButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 8px;
    height: auto;
    justify-content: center;
    margin: 8px 0;
`;

const SharePanel = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: ${props => props.theme.dark};
    font-family: 'Ropa Sans', sans-serif;
    font-size: 16px;
    font-weight: bold;

`;

const ShareButtons = () => {
    const iconSize = 44;
    return (
        <SharePanel>
            Share this article
            <ShareButtonContainer>
                <EmailShareButton style={{marginRight: '4px'}} url={window.location.href}><EmailIcon
                    size={iconSize}/></EmailShareButton>
                <FacebookShareButton style={{marginRight: '4px'}} url={window.location.href}><FacebookIcon
                    size={iconSize}/></FacebookShareButton>
                <TwitterShareButton style={{marginRight: '4px'}} url={window.location.href}><TwitterIcon size={iconSize}/></TwitterShareButton>
                <LinkedinShareButton style={{marginRight: '4px'}} url={window.location.href}><LinkedinIcon
                    size={iconSize}/></LinkedinShareButton>
                <TelegramShareButton style={{marginRight: '4px'}} url={window.location.href}><TelegramIcon
                    size={iconSize}/></TelegramShareButton>
                <RedditShareButton style={{marginRight: '4px'}} url={window.location.href}><RedditIcon
                    size={iconSize}/></RedditShareButton>
            </ShareButtonContainer>
        </SharePanel>);
}

export {LikeButton, ShareButtons};