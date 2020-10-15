import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import MySidebar from './Sidebar/Sidebar';

function MyNavbar() {
    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.includes('game')){
        const handleScroll = () => {
            const show = window.scrollY > 400
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }else{
        setNavBackground(true)
    }}, [location.pathname])

    const style = {
        backgroundColor: 'rgba(65, 24, 126)',
        transition: '1s ease'
    }
    const style2 = {
        backgroundColor: 'transparent',
        transition: '1s ease'
    }


    let homepage;
    if(location.pathname === '/'){
        homepage = true;
    }else{
        homepage = false;
    }


    return (
        <>
            <nav className='MyNavbar' style={navBackground ? style : style2}>
                <div className='menu'>
                    <MySidebar />
                </div>
                <Link className='mainLogo' to="/" >
                    <img src={logo} alt="" />
                </Link>
                <div className='nav-links'>
                <a target='_blank' rel="noopener noreferrer" href="https://www.brainster.io/business">Обуки за компании</a>
                <a target='_blank' rel="noopener noreferrer" href="https://www.brainster.io/business.">Вработи наши студенти</a>
            </div>
            </nav>
            <div className='nav-links-mobile ' id={`${homepage ? 'nav-links-mobile-homepage' : null}`}>
                <a target='_blank' rel="noopener noreferrer" href="https://www.brainster.io/business">Обуки за компании</a>
                <a target='_blank' rel="noopener noreferrer" href="https://www.brainster.io/business.">Вработи наши студенти</a>
            </div>
        </>
    )
}

export default MyNavbar;