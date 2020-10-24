import React from "react"
import fb from "../../images/fb.svg"
import email from "../../images/email.svg"
import github from "../../images/github.svg"
import linkedin from "../../images/linkedin.svg"
import insta from "../../images/insta.svg"
import medium from "../../images/medium.svg"
import twitter from "../../images/twitter.svg"
import styled from "styled-components"
import { device } from "../Global"

const AuthorStripe = styled.div`
    background-color: #1F2023;
    width: 100%;
    height: auto;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const AuthorDetails = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
    flex-direction: column;
    align-items: center;
    height: auto;
    
    @media ${device.tablet} {
        flex-direction: row;
        align-items: start;
    }
`

const AuthorImage = styled.img`
    width: 160px;
    height: 160px;
    margin: 0;
    @media ${device.tablet} {
        width: 200px;
        height: 200px;
        margin-right: 40px;
    }

`

const AuthorText = styled.div`
    display: flex;
    font-family: 'Source Sans Pro', sans-serif;
    color: #f7f7f7;
    text-align: left;
    flex-direction: column;
    margin-top: 24px;
    align-items: center;
    height: auto;
    justify-content: space-evenly;
    
    @media ${device.tablet} {
        margin-top: 0;
        align-items: flex-start;
        height: 200px;
    }
    
`

const AuthorStripeWrittenBy = styled.div`
    color: #FE6A6A;
    font-family: 'Ropa Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
`

const AuthorName = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
    font-size: 44px;
`

const AuthorBio = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
`

const SocialLinks = styled.div`
    display: flex;
    justify-items: center;
    justify-content: start;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 4px;
    
    @media ${device.tablet} {
        margin-top: 0;
    }
`

const SocialLink = styled.img`
    width: 24px;
    height: 24px;
    margin: 8px;
    @media ${device.tablet} {
        width: 32px;
        height: 32px;
    }
`

const Author = () => {
  return (
    <AuthorStripe>
      <AuthorDetails>
        <AuthorImage
          src={"https://avatars0.githubusercontent.com/u/46624829?s=460&u=387daf3f9715ebca5467a76694b28fa7e01a8b66&v=4"}
          alt={"profile"}/>
        <AuthorText>
          <AuthorStripeWrittenBy>Author</AuthorStripeWrittenBy>
          <AuthorName>Kumar Harsh</AuthorName>
          <AuthorBio>
            MERN Stack | Mobile | Cloud | Life <span role={"img"} aria-label={"sparkle"}>✨</span>
          </AuthorBio>
          <SocialLinks>
            <a href="mailto:kharsh39@gmail.com"><SocialLink src={email} alt='Email'/></a>
            <a href="https://facebook.com/krharsh17"><SocialLink src={fb} alt='Facebook'/></a>
            <a href="https://twitter.com/krharsh17"><SocialLink src={twitter} alt='Twitter'/></a>
            <a href="https://linkedin.com/in/krharsh17"><SocialLink src={linkedin}
                                                                    alt='LinkedIn'/></a>
            <a href="https://medium.com/@krharsh17"><SocialLink src={medium} alt='Medium'/></a>
            <a href="https://instagram.com/krharsh17"><SocialLink src={insta}
                                                                  alt='Instagram'/></a>
            <a href="https://github.com/krharsh17"><SocialLink src={github} alt='GitHub'/></a>
          </SocialLinks>
        </AuthorText>
      </AuthorDetails>
    </AuthorStripe>
  )
}

export default Author
