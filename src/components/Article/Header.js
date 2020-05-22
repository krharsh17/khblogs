import React from 'react';
import d_arrow from "../../images/down_arrow.png";
import logo from '../../images/logo.svg';
const bg = "https://source.unsplash.com/collection/9943293/1600x900";


const HeaderBG = () => {
    return (
    <div style={{height: '100vh', width: '100vw'}}>       
        <div className='header-bg-overlay'></div>
        <img src={bg} 
            alt=''
            className='header-bg-img' /> 
    </div>
    );
}

const HeaderTitle = (props) => {
    return (
        <div className='header-text-container'>
            <p className='header-title'>{props.title}</p>
            <p className='header-meta'>{props.length} / {props.topic} / {props.date}</p>
        </div>
    );
}

const DownArrow = () => {
    return <img src={d_arrow} className='down-arrow' alt='' />
}

const Logo = () => {
    return <a href={'/'}><img src={logo} className='logo' alt='' /></a>;
}

const ProfileLink = () => {
    return (
        <a href='https://krharsh17.github.io'>
            <img src='https://avatars0.githubusercontent.com/u/46624829?s=400&u=387daf3f9715ebca5467a76694b28fa7e01a8b66&'
            alt='Kumar Harsh'
            className='header-profile'/>
        </a>
    );
}

export {HeaderBG, HeaderTitle, DownArrow, Logo, ProfileLink};