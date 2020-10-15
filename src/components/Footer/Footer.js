import React from 'react';
import './Footer.css';
import Logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className='Footer'>
            <ul>
                <li>
                    <Link to="/brainster.co/about" >About Us</Link>
                </li>
                <li>
                    <Link to="/brainster.co/contact" >Contact</Link>
                </li>
                <li>
                    <a href="https://www.facebook.com/pg/brainster.co/photos/">Gallery</a>
                </li>
            </ul>
                <img
                 onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}
                  src={Logo} 
                  alt="" 
                  style={{cursor: 'pointer'}} />
            <ul>
                <li>
                    <a href="https://www.linkedin.com/school/brainster-co/">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/BrainsterCo">
                        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/brainster.co">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;