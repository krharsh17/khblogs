import React, { useContext } from "react"
import styled from "styled-components"
import { Col, Container, Row } from "reactstrap"
import DarkModeToggle from "react-dark-mode-toggle"
import { device } from "../Global"
import { CustomThemeContext } from "../../theme/CustomThemeProvider"

const HomeContainer = styled(Container)`
  background-color: ${props => props.theme.light};
  width: 100%;
  transition-duration: 1s;
`

const HomeNavContainer = styled(Row)`
  width: 100%;
  height: 64px;
  color: ${props => props.theme.light};
  background-color: ${props => props.theme.primary};
  font-family: "Over the Rainbow", cursive;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  font-size: 32px;
  line-height: 64px;
  transition-delay: 0.2s;
  transition-duration: 1s;

  @media ${device.tablet} {
    height: 80px;
    padding-left: 10%;
    padding-right: 10%;
    font-size: 44px;
    line-height: 80px;
  }
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  margin-left: 4vw;
  &:hover {
    cursor: pointer;
  }
`

const HomeLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.light};
`

const HomeNav = props => {
  const { currentTheme, setTheme } = useContext(CustomThemeContext)

  const toggleDarkMode = checked => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <Col>
      <HomeNavContainer theme={props.theme}>
        <HomeLink href={"/"}>KHBlogs</HomeLink>
        <SearchContainer>
          {/*<SearchBar placeholder={'Search...'}/>*/}
          <DarkModeToggle
            onChange={toggleDarkMode}
            checked={currentTheme === "dark"}
            size={56}
          />
          <ProfileImage
            onClick={() => window.open("https://krharsh17.github.io")}
            src={
              "https://avatars0.githubusercontent.com/u/46624829?s=400&u=387daf3f9715ebca5467a76694b28fa7e01a8b66&"
            }
          />
        </SearchContainer>
      </HomeNavContainer>
    </Col>
  )
}

export { HomeNav, HomeContainer }
