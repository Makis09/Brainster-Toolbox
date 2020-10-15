import React from 'react';
// import logo from '../../../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function SidebarContent(props) {

    return (
        <div className='SidebarContent'>
            <div>
                <Link to='/' onClick={props.closeSIdebar} >
                    <img className='sidebarLogo' src={require('../../../../assets/images/logo.png')} alt="brainster logo" />
                </Link>
                <span onClick={props.closeSIdebar}>
                    <FontAwesomeIcon style={{ marginRight: '5px' }} icon='times' />
                    Затвори
                </span>
            </div>
            <ul>
                <li>
                    <Link className='orange-text' to='/Register' onClick={props.closeSIdebar}>Регистрирај се</Link>
                </li>
                <li>
                    <Link className='orange-text' to='/Log-in' onClick={props.closeSIdebar}>Најави се</Link>
                </li>
                <li>
                    <Link to="/brainster.co/about" onClick={props.closeSIdebar}>За нас</Link>
                </li>
                <li>
                    <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/pg/brainster.co/photos/">Галерија</a>
                </li>
                <li>
                    <Link to="/brainster.co/contact" onClick={props.closeSIdebar}>Контакт</Link>
                </li>
            </ul>
        </div>
    )
}

export default SidebarContent;