import React, {useContext} from 'react';
import styled, {ThemeContext} from "styled-components";
import {device} from '../Global';
import donate from '../../images/coffee.svg';

const TwitterShare = (props) => {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.3118 2.13777C1.92192 1.88942 1.63038 9.52349 1.63038 9.52349C1.17687 20.8612 9.34004 34.4233 16.661 34.4449C25.1481 34.4665 35.6652 18.7664 34.2507 10.4089C32.9406 2.6687 20.7204 2.38409 12.2575 2.18699C11.5826 2.17127 10.9316 2.15611 10.3118 2.13777ZM25.9037 10.6788C26.7676 10.5708 27.5882 10.3441 28.3549 10.0093C27.7826 10.8623 27.0699 11.6074 26.2385 12.2121C26.2385 12.3039 26.2412 12.3956 26.2439 12.4874C26.2466 12.5792 26.2493 12.671 26.2493 12.7628C26.2493 18.3776 21.9733 24.8563 14.1557 24.8563C11.7478 24.8563 9.51261 24.1545 7.63379 22.9451C7.96852 22.9883 8.30326 22.9991 8.64879 22.9991C10.6356 22.9991 12.4712 22.3188 13.9289 21.1959C12.0717 21.1527 10.506 19.9217 9.95533 18.2373C10.2037 18.3021 10.4844 18.3129 10.7544 18.3129C11.1431 18.3129 11.521 18.2697 11.8665 18.1725C9.93373 17.773 8.46522 16.0561 8.46522 13.9937V13.9505C9.03751 14.2529 9.70698 14.458 10.3872 14.4688C9.25347 13.713 8.49762 12.4064 8.49762 10.9379C8.49762 10.1497 8.71357 9.42624 9.0807 8.78916C11.1755 11.3698 14.3069 13.0651 17.8378 13.2379C17.773 12.9247 17.7406 12.6008 17.7406 12.2661C17.7406 9.92294 19.6302 8.01172 21.9841 8.01172C23.1935 8.01172 24.3057 8.53001 25.0831 9.36145C26.0441 9.16709 26.9511 8.82156 27.7718 8.33565C27.4586 9.32905 26.7892 10.1497 25.9037 10.6788Z"
                  fill={props.color}/>
        </svg>
    );

};

const FacebookShare = (props) => {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.3118 2.13777C1.92192 1.88942 1.63038 9.52349 1.63038 9.52349C1.17687 20.8612 9.34004 34.4233 16.661 34.4449C25.1481 34.4665 35.6652 18.7664 34.2507 10.4089C32.9406 2.6687 20.7204 2.38409 12.2575 2.18699C11.5826 2.17127 10.9316 2.15611 10.3118 2.13777ZM20.624 7.24512H23.453C23.7014 7.24512 23.8957 7.45028 23.8849 7.68783V11.0352C23.8849 11.2835 23.6906 11.4779 23.4422 11.4779H21.5418C20.2245 11.4779 19.9869 11.9962 19.9869 13.0004V15.0951H23.3127C23.4314 15.0951 23.5394 15.1383 23.6258 15.2247C23.7122 15.3111 23.7554 15.4191 23.7554 15.5379V19.1227C23.7554 19.3711 23.561 19.5655 23.3127 19.5655H19.9869V28.614C19.9869 28.8624 19.7926 29.0568 19.5442 29.0568H15.8297C15.5814 29.0568 15.387 28.8624 15.387 28.614V19.5547H12.5472C12.2989 19.5547 12.1045 19.3603 12.1045 19.1119V15.5271C12.1045 15.2787 12.2989 15.0843 12.5472 15.0843H15.387V12.6116C15.387 9.3507 17.4494 7.24512 20.624 7.24512Z"
                  fill={props.color}/>
        </svg>
    );

}

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
`;

const RecommendationStripe = styled.div`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.light};
    font-size: 14px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    padding: 12px 5%;
    text-align: center;
    
    @media ${device.tablet}{
        font-size: 16px;
        padding: 16px 5%;
    }
    
    a {
        text-decoration: none;
        color: ${props => props.theme.light};
        border-bottom: 1px solid ${props => props.theme.light};
        transition-duration: 0.4s;
    
        &:hover{
            background-color: ${props => props.theme.light};
            color: ${props => props.theme.secondary};
        }
    
    }
`;

const FooterRow = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.primary};
    min-height: 240px;
    padding: 0 5%;
    justify-content: space-evenly;
    align-items: center;
    
    @media ${device.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const AboutCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    min-height: 160px;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${props => props.theme.light};
    
    h1 {
        font-weight: 700;
        font-size: 24px;
        padding-bottom: 4px;
        border-bottom: 2px solid ${props => props.theme.secondary};
    }
    
    a {    
        font-weight: 400;
        color: ${props => props.theme.light};
        font-size: 14px;
        margin-bottom: 12px;
        text-decoration: none; 
        transition-duration: 0.4s;
        
        &: hover {
            background-color: ${props => props.theme.light};
            color: ${props => props.theme.primary};
        }   
    }
    
    @media ${device.tablet} {
        width: 20%;
        align-items: flex-start;
    }
`;

const BrandCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    min-height: 160px;
    font-family: 'Over the Rainbow', cursive;
    font-size: 64px;
    color: ${props => props.theme.light};
    
    @media ${device.mobileL} {
        width: 20%;
    }
    
    @media ${device.tablet} {
        font-size: 4.4vw;
        align-items: flex-start;
    }

`;

const DonateCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Ropa Sans', sans-serif;
    font-size: 16px;
    text-align: center; 
    color: ${props => props.theme.light};
    
    a {
        margin-top: 8px;
    }
    
    @media ${device.tablet} {
        width: 20%;
        align-items: flex-start;
        
        a {
            margin-top: 0;
        }
    }

`;

const DonateButton = styled.img`
    width: 100%;
    max-width: 270px;
    transition-duration: 0.4s;
    
    &:active {
        transform: translateY(4px);
    }
`;

const BottomStripe = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.dark};
    justify-content: space-between;
    width: 90%;
    min-height: 70px;
    align-items: center;
    color: ${props => props.theme.light};
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    font-weight: 300;
    padding: 16px 5%;
    
    @media ${device.tablet} {
        flex-direction: row;
        min-height: 0px;
        height: 32px;
    }
   
`;

const Share = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 200px;
    
    
`;

const HomeFooter = (props) => {
    const theme = useContext(ThemeContext);
    return (
        <FooterContainer>
            <RecommendationStripe>
                Is this website helpful for you? Please <a href={'mailto:krharsh619@gmail.com'}>share</a> your feedback
                to help me improve. Connect with me on <a href={'https://facebook.com/krharsh17'}>Facebook</a> and&nbsp;
                <a href={'https://twitter.com/krharsh17'}>Twitter</a> for the latest updates.
            </RecommendationStripe>
            <FooterRow>
                <AboutCol>
                    <h1>About Me</h1>
                    <a href={'https://krharsh17.vision'}>Who am I?</a>
                    <a href={'/terms-of-use'}>Terms of Use</a>
                    <a href={'/privacy-policy'}>Privacy Policy</a>
                </AboutCol>

                <AboutCol>
                    <h1>Contact</h1>
                    <a href={'https://krharsh17.vision'}>Contact Me</a>
                    <a href={'/terms-of-use'}>Report Error</a>
                    <a href={'/privacy-policy'}>Advertise</a>
                </AboutCol>

                <BrandCol>KHBlogs</BrandCol>

                <DonateCol>
                    Help me make more of such awesome content!
                    <a href={'https://ko-fi.com/krharsh17'}>
                        <DonateButton src={donate}/>
                    </a>
                </DonateCol>

            </FooterRow>
            <BottomStripe>
                Copyright © 2020 Kumar Harsh. All Rights Reserved.
                <Share>
                    Share this:
                    <TwitterShare color={theme.light}/>
                    <FacebookShare color={theme.light}/>
                </Share>
            </BottomStripe>
        </FooterContainer>
    )
}

export default HomeFooter;