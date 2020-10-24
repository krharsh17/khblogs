import React from "react"
import social from '../images/social.png'
import {HomeContainer, HomeNav} from "../components/Home/Nav"
import {TopArticles} from "../components/Home/Header"
import HomeBody from "../components/Home/Body"
import HomeFooter from "../components/Home/Footer"
import Loader from "../components/Loader"
import SEO from "../components/seo"
import {useAppReady} from "../components/useAppReady";

const IndexPage = () => {
	const appReady = useAppReady()
	return (
		<>
			<SEO title={"Kumar Harsh"} description={"A collection of all of my written content"} image={social}/>
			<HomeContainer>
				<Loader appReady={appReady}/>
				<HomeNav/>
				<TopArticles/>
				<HomeBody/>
				<HomeFooter/>
			</HomeContainer>
		</>
	)
}

export default IndexPage
