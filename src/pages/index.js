import React, { useEffect, useState } from "react"
import favicon from "../images/favicon.ico"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../components/Global"
import { HomeContainer, HomeNav } from "../components/Home/Nav"
import { TopArticles } from "../components/Home/Header"
import HomeBody from "../components/Home/Body"
import HomeFooter from "../components/Home/Footer"

const IndexPage = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [theme, setTheme] = useState(lightTheme)

  useEffect(() => {
    const lsDark = localStorage.getItem("dark") === "true"
    toggleDarkMode(lsDark)

  }, [])

  const toggleDarkMode = (darkModeBool) => {
    if (darkModeBool === true) {
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
    localStorage.setItem("dark", JSON.stringify(darkModeBool))
    setDarkMode(darkModeBool)
  }

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon}/>
      </Helmet>
      <Layout>
        <ThemeProvider theme={theme}>
          <HomeContainer>
            <HomeNav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <TopArticles/>
            <HomeBody/>
            <HomeFooter/>
          </HomeContainer>
        </ThemeProvider>
      </Layout>
    </>
  )
}

export default IndexPage
