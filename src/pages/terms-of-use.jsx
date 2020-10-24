import React from "react"
import styled from "styled-components"
import {HomeContainer, HomeNav} from "../components/Home/Nav"
import HomeFooter from "../components/Home/Footer"
import {ArticleH1, ArticleTextSpan} from "../components/Article/Content"

const TermsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-contents: flex-start;
    padding: 2% 10%;
`

const TermsTitle = styled(ArticleH1)`
  font-size: 48px;
`

const Contact = () => {

	return (
		<>
			<HomeContainer>
				<HomeNav/>

				<TermsContainer>

					<TermsTitle>Website Terms and Conditions of Use</TermsTitle>
					<ArticleH1>1. Terms</ArticleH1>
					<ArticleTextSpan>By accessing this Website, accessible from https://blog.krharsh17.vision, you are
						agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for
						the agreement with any applicable local laws. If you disagree with any of these terms, you are
						prohibited from accessing this site. The materials contained in this Website are protected by copyright
						and trade mark law.</ArticleTextSpan>

					<ArticleH1>2. Use License</ArticleH1>
					<ArticleTextSpan>Permission is granted to temporarily download one copy of the materials on KHBlogs's
						Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a
						transfer of title, and under this license you may not:</ArticleTextSpan>
					<ArticleTextSpan>- modify or copy the materials;</ArticleTextSpan>
					<ArticleTextSpan>- use the materials for any commercial purpose or for any public
						display;</ArticleTextSpan>
					<ArticleTextSpan>- attempt to reverse engineer any software contained on KHBlogs's
						Website;</ArticleTextSpan>
					<ArticleTextSpan>- remove any copyright or other proprietary notations from the materials;
						or</ArticleTextSpan>
					<ArticleTextSpan>- transfer the materials to another person or "mirror" the materials on any other
						server.</ArticleTextSpan>
					<ArticleTextSpan>This will let KHBlogs to terminate upon violations of any of these restrictions. Upon
						termination, your
						viewing right will also be terminated and you should destroy any downloaded materials in your possession
						whether it is printed or electronic format.</ArticleTextSpan>

					<ArticleH1>3. Disclaimer</ArticleH1>
					<ArticleTextSpan>All the materials on KHBlogs’s Website are provided "as is". KHBlogs makes no warranties,
						may it be expressed or implied, therefore negates all other warranties. Furthermore, KHBlogs does not
						make any representations concerning the accuracy or reliability of the use of the materials on its
						Website or otherwise relating to such materials or any sites linked to this Website.</ArticleTextSpan>

					<ArticleH1>4. Limitations</ArticleH1>
					<ArticleTextSpan>KHBlogs or its suppliers will not be hold accountable for any damages that will arise
						with the use or inability to use the materials on KHBlogs’s Website, even if KHBlogs or an authorize
						representative of this Website has been notified, orally or written, of the possibility of such damage.
						Some jurisdiction does not allow limitations on implied warranties or limitations of liability for
						incidental damages, these limitations may not apply to you.</ArticleTextSpan>

					<ArticleH1>5. Revisions and Errata</ArticleH1>
					<ArticleTextSpan>The materials appearing on KHBlogs’s Website may include technical, typographical, or
						photographic errors. KHBlogs will not promise that any of the materials in this Website are accurate,
						complete, or current. KHBlogs may change the materials contained on its Website at any time without
						notice. KHBlogs does not make any commitment to update the materials.</ArticleTextSpan>

					<ArticleH1>6. Links</ArticleH1>
					<ArticleTextSpan>KHBlogs has not reviewed all of the sites linked to its Website and is not responsible
						for the contents of any such linked site. The presence of any link does not imply endorsement by KHBlogs
						of the site. The use of any linked website is at the user’s own risk.</ArticleTextSpan>

					<ArticleH1>7. Site Terms of Use Modifications</ArticleH1>
					<ArticleTextSpan>KHBlogs may revise these Terms of Use for its Website at any time without prior notice.
						By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions
						of Use.</ArticleTextSpan>

					<ArticleH1>8. Your Privacy</ArticleH1>
					<ArticleTextSpan>Please read our Privacy Policy.</ArticleTextSpan>

					<ArticleH1>9. Governing Law</ArticleH1>
					<ArticleTextSpan>Any claim related to KHBlogs's Website shall be governed by the laws of in without
						regards to its conflict of law provisions.</ArticleTextSpan>


				</TermsContainer>
				<HomeFooter/>
			</HomeContainer>
		</>
	)
}

export default Contact