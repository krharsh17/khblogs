import React from "react";
import fb from '../../images/fb.svg';
import email from '../../images/email.svg';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import insta from '../../images/insta.svg';
import medium from '../../images/medium.svg';
import twitter from '../../images/twitter.svg';

const Author = () => {
    return (
        <div className={'author-stripe'}>
            <div className={'author-details'}>
                <img className={'author-image'}
                     src={'https://avatars0.githubusercontent.com/u/46624829?s=460&u=387daf3f9715ebca5467a76694b28fa7e01a8b66&v=4'}
                     alt={'profile'}/>
                <div className={'author-text'}>
                    <div className={'author-stripe-written-by'}>Author</div>
                    <div className={'author-name'}>Kumar Harsh</div>
                    <div className={'author-bio'}>
                        MERN Stack | Mobile | Cloud | Life <span role={'img'} aria-label={'sparkle'}>✨</span>
                    </div>
                    <div className="links">
                        <a href="mailto:kharsh39@gmail.com"><img src={email} className='link' alt='Email'/></a>
                        <a href="https://facebook.com/krharsh17"><img src={fb} className='link' alt='Facebook'/></a>
                        <a href="https://twitter.com/krharsh17"><img src={twitter} className='link' alt='Twitter'/></a>
                        <a href="https://linkedin.com/in/krharsh17"><img src={linkedin} className='link'
                                                                         alt='LinkedIn'/></a>
                        <a href="https://medium.com/@krharsh17"><img src={medium} className='link' alt='Medium'/></a>
                        <a href="https://instagram.com/krharsh17"><img src={insta} className='link'
                                                                       alt='Instagram'/></a>
                        <a href="https://github.com/krharsh17"><img src={github} className='link' alt='GitHub'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Author;
