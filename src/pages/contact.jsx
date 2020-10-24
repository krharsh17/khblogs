import React from "react"
import styled from "styled-components"
import { HomeContainer, HomeNav } from "../components/Home/Nav"
import HomeFooter from "../components/Home/Footer"
import {
  ArticleH1,
  ArticleH2,
  ArticleLink,
  ArticleTextSpan,
} from "../components/Article/Content"

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: flex-start;
  padding: 2% 10%;
`

const ContactTitle = styled(ArticleH1)`
  font-size: 48px;
`

const Contact = () => {
  return (
    <>
      <HomeContainer>
        <HomeNav />

        <ContactContainer>
          <ContactTitle>Contact</ContactTitle>

          <ArticleH2>Contact Me</ArticleH2>
          <ArticleTextSpan>
            You can find all of my contact details{" "}
            <ArticleLink href={"https://krharsh17.vision"}>here!</ArticleLink>
          </ArticleTextSpan>

          <ArticleH2>Report Error</ArticleH2>
          <ArticleTextSpan>
            Do you notice any error on this website? Feel free to report it on
            my{" "}
            <ArticleLink href={"mailto:krharsh619@gmail.com"}>
              email
            </ArticleLink>
            . You could also try reaching out to me on{" "}
            <ArticleLink href={"https://twitter.com/krharsh17"}>
              twitter.
            </ArticleLink>
          </ArticleTextSpan>

          <ArticleH2>Advertising</ArticleH2>
          <ArticleTextSpan>
            Please direct all advertising & media related queries to my{" "}
            <ArticleLink href={"mailto:krharsh619@gmail.com"}>
              email address
            </ArticleLink>
            .{" "}
          </ArticleTextSpan>
        </ContactContainer>
        <HomeFooter />
      </HomeContainer>
    </>
  )
}

export default Contact
