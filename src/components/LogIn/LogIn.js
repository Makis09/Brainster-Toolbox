import React from 'react';
import './Login.css';
import InputField from '../Inputs/InputField';
import Footer from '../Footer/Footer';

function LogIn() {

    return (
        <div className='LoginContainer'>
            <h1>Најави се</h1>
            <form action="" method="post" autoComplete="off">
                <InputField type='email' for='Email' description="Email" />
                <InputField type='password' for='Password' description="Лозинка" />
                <input type="submit" value='Најави се' />
            </form>
            <div style={{position:'relative', height: 'inherit'}}>
                <Footer />
            </div>
        </div>
    )
}
export default LogIn;