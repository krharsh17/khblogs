import React, {useState, useEffect} from "react";
import firebase from "../Firebase";
import {ClipLoader} from "react-spinners";
import styled from "styled-components";
import {device} from "../Global";

const CommentBoxContainer = styled.div`
    position: relative;
    width: 90vw;
    display: flex;
    flex-direction: column;
    height: auto;
    padding-bottom: 12px;
    background: ${props => props.theme.light};
    margin-bottom: 24px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    
    @media ${device.tablet} {
        width: 600px;
    }

`;

const CommentBoxInput = styled.textarea`
    width: 86vw;
    margin: 2vw 2vw;
    height: 100px;
    resize: none;
    background: ${props => props.theme.light};
    color: ${props => props.theme.dark};
    border: 0.5px solid rgba(39, 41, 45, 0.4);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px 8px;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    font-size: 16px;
    transition-duration: 0.4s;
    
    &:hover,
    &:focus {
        outline: none;
        border: 1.5px solid rgba(39, 41, 45, 1.0);
    }
    
    @media ${device.tablet} { 
        width: 580px;
        margin: 10px 10px;
    }
`;

const CommentBoxFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    @media ${device.tablet} {
        flex-direction: row;
    }
`;

const CommentBoxName = styled.input`
    width: 80vw;
    margin-top: 4px;
    margin-bottom: 4px;
    background: ${props => props.theme.light};
    border: 0.5px solid ${props => props.theme.dark};
    height: 32px;
    border-radius: 4px;
    font-family: "Noto Sans", sans-serif;
    font-weight: 400;
    color: ${props => props.theme.dark};
    padding-right: 8px;
    padding-left: 8px;
    
    &:focus {
        outline: none;
    }
    
    @media ${device.tablet} {
        width: 210px;
        margin: 0;
    }

`;

const CommentBoxEmail = styled.input`
    background: ${props => props.theme.light};
    border: 0.5px solid ${props => props.theme.dark};
    height: 32px;
    width: 80vw;
    border-radius: 4px;
    font-family: "Noto Sans", sans-serif;
    font-weight: 400;
    color: ${props => props.theme.dark};
    padding-right: 8px;
    padding-left: 8px;
    margin-top: 4px;
    margin-bottom: 4px;
    
    &:focus {
        outline: none;
    }
    
    @media ${device.tablet} {
        width: 210px;
        margin: 0;
    }

`;

const CommentBoxPost = styled.input`
    background: ${props => props.theme.dark};
    border-radius: 4px;
    outline: none;
    border: none;
    height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    width: 80vw;
    color: ${props => props.theme.light};
    transition-duration: 0.4s;
    
    &:disabled {
        background-color: ${props => props.theme.disabled};
    }
    
    &:focus,
    &:active,
    &::-moz-focus-inner {
        outline: none;
        border: 0;
    }
    
    @media ${device.tablet} {
        width: 90px;
        margin: 0;
    }
`;

const CommentBoxShowButton = styled.div`    
    width: 300px;
    height: 60px;
    background-color: #121212;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    display: flex;
    border-radius: 2px;
    margin-bottom: 24px;
    justify-content: center;
    align-items: center;
    transition-duration: 0.4s;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    
    &:hover {
    background-color: #212121;
    }
    
    @media ${device.tablet} {
        width: 600px;
        height: 75px;
    }
`;

const CommentBox = (props) => {
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isShown, setIsShown] = useState('button');

    switch (isShown) {
        case 'form':
            return (<CommentBoxContainer>
                <CommentBoxInput placeholder={'Write a reaction!'} onChange={(e) => {
                    setComment(e.target.value);
                }}/>
                <CommentBoxFooter>
                    <CommentBoxName placeholder={'Name'} onChange={(event => setName(event.target.value))}/>
                    <CommentBoxEmail placeholder={'Email'} onChange={(event => setEmail(event.target.value))}/>
                    <CommentBoxPost type={'button'}
                                    value={'Post!'}
                                    onClick={() => {
                                        firebase.database().ref('articles/' + props.id + '/comments/')
                                            .push({
                                                name: name,
                                                email: email,
                                                comment: comment
                                            })
                                            .then(() => {
                                                setIsShown('hidden');
                                            });
                                    }}
                                    disabled={!(comment.length !== 0 && name.length !== 0 && email.length !== 0 && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))}/>
                </CommentBoxFooter>
            </CommentBoxContainer>);
        case 'button':
            return (
                <CommentBoxShowButton
                    onClick={() => {
                        setIsShown('form');
                    }}>
                    Comment!
                </CommentBoxShowButton>
            );
        case 'hidden':
        default:
            return <div/>;
    }
}

const CommentsList = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
`;

const CommentsTitle = styled.div`
    margin-bottom: 8px;
    text-align: start;
    margin-left: 16px;
    color: ${props => props.theme.light};
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
`;

const Comments = (props) => {
    const [loading, setLoading] = useState('true');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        firebase.database().ref('articles/' + props.id + '/comments')
            .on('value', snapshot => {
                const comments = [];
                if (snapshot.val() !== null) {
                    Object.values(snapshot.val()).forEach((elem) => {
                        const temp = <Comment key={elem.email} comment={elem.comment} name={elem.name}/>
                        comments.push(temp);
                    });
                    setComments(comments);
                    setLoading('false');
                } else
                    setLoading('none');
            });
    }, []);


    if (loading === 'true') {
        return <div style={{
            marginTop: '40px'
        }}>
            <ClipLoader
                size={50}
                color={"#121212"}
                loading={true}
            />
        </div>
    } else if (loading === 'false') {

        return <CommentsList>
            <CommentsTitle>Top comments</CommentsTitle>
            {comments}
        </CommentsList>
    } else {
        return <div/>
    }


}

const CommentContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    box-shadow: ${props => props.theme.dark};
    background-color: ${props => props.theme.light};
    border-radius: 4px;
    margin: 8px;
    padding: 8px 4px;
    
    @media ${device.tablet} {
        width: 500px;
    }
`;

const CommentImage = styled.div`
    height: 48px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: ${props => props.theme.light};
    background-color: ${props => props.theme.dark};
    opacity: 0.8;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 500;
    border-radius: 50px;
    margin: 8px 12px;
`;

const CommentDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${props => props.theme.dark};
    font-size: 14px;
    margin: 10px 0;
`;

const CommentAuthor = styled.div`
    font-weight: 700;
    font-size: 16px;
`;

const CommentText = styled.div`
    font-weight: 400;
    text-align: left;
    width: 200px;
    white-space: pre-line;
    
    @media ${device.tablet} {
        width: 400px;
    }
`;

const Comment = (props) => {
    return (
        <CommentContainer>
            <CommentImage>{props.name[0].toUpperCase()}</CommentImage>
            <CommentDetails>
                <CommentAuthor>{props.name}</CommentAuthor>
                <CommentText>{props.comment}</CommentText>
            </CommentDetails>
        </CommentContainer>
    );
}

export {CommentBox, Comments};