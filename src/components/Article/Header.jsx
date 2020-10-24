import React from "react"
import d_arrow from "../../images/down_arrow.png"
import logo from "../../images/logo.svg"
import styled, { keyframes } from "styled-components"
import { device } from "../Global"

const bg = "https://source.unsplash.com/collection/9943293/1600x900"

const HeaderBGImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  margin: 0;
  z-index: 0;
  background-image: url(${bg});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const HeaderBGMask = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  margin: 0;
  left: 0;
  z-index: 1;
  background-color: #000;
  opacity: 0.6;
`

const HeaderTextContainer = styled.div`
  position: absolute;
  bottom: 50%;
  text-align: start;
  width: 60%;
  left: 20%;
  z-index: 2;
  transform: translateY(50%);
`

const HeaderTitleText = styled.div`
  color: white;
  font-size: 32px;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  margin-bottom: 0;

  @media ${device.tablet} {
    font-size: 48px;
  }
`

const HeaderMeta = styled.div`
  color: #cacaca;
  font-size: 20px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  margin-top: 4px;
`

const HeaderProfile = styled.img`
  position: absolute;
  width: 40px;
  border-radius: 32px;
  top: 16px;
  z-index: 2;
  right: 24px;
`

const LogoImg = styled.img`
  position: absolute;
  top: 16px;
  left: 24px;
  height: 48px;
  z-index: 20;
`

const down = keyframes`
    0% {
        bottom: 32px;
    }

    75% {
        bottom: 48px;
    }

    100% {
        bottom: 32px;
    }
`

const DownArrowImg = styled.img`
  z-index: 2;
  position: absolute;
  bottom: 32px;
  left: 48px;
  height: 32px;
  width: 32px;
  animation-name: ${down};
  animation-duration: 1s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
`

const HeaderBG = () => {
  return (
    <HeaderBGImg>
      <HeaderBGMask />
    </HeaderBGImg>
  )
}

const HeaderTitle = props => {
  return (
    <HeaderTextContainer>
      <HeaderTitleText>{props.title}</HeaderTitleText>
      <HeaderMeta>
        {props.length} / {props.topic} / {props.date}
      </HeaderMeta>
    </HeaderTextContainer>
  )
}

const DownArrow = () => {
  return <DownArrowImg src={d_arrow} alt="" />
}

const Logo = () => {
  return (
    <a href={"/"}>
      <LogoImg src={logo} alt="" />
    </a>
  )
}

const ProfileLink = () => {
  return (
    <a href="https://krharsh17.github.io">
      <HeaderProfile
        src="https://avatars0.githubusercontent.com/u/46624829?s=400&u=387daf3f9715ebca5467a76694b28fa7e01a8b66&"
        alt="Kumar Harsh"
      />
    </a>
  )
}

export { HeaderBG, HeaderTitle, DownArrow, Logo, ProfileLink }
