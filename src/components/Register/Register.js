import React from 'react';
import './Register.css';
import Footer from '../Footer/Footer';
import InputField from '../Inputs/InputField';
import SelectField from '../Inputs/SelectField';



function Register() {

    return (
        <div className='Register'>
            <h1>Регистрирај се</h1>
            <form action="" method="post" autoComplete="off">
                <InputField type='text' for='firstName' description='Име' />
                <InputField type='text' for='lastName' description='Презиме' />
                <InputField type='text' for='company' description='Компанија' />
                <InputField type='text' for='phoneNumber' description='Телефонски број' />
                <InputField type='email' for='Email' description='Email' />
                <InputField type='password' for='password' description='Лозинка' />
                <SelectField description='Број на вработени' for='numberOfEmployees' options={['1', '2 - 10', '11 - 50', '51 - 200', '200+']} />
                <SelectField description='Сектор' for='Sector' options={['Човечки ресурси', 'Маркетинг', 'Продукт', 'Продажба', 'CEO', 'Друго']} />
                <div className='textareaAndSubmitContainer'>
                    <textarea name='message' id='message' rows='7' placeholder='Порака'></textarea>
                    <input type="submit" value='Регистрирај се' />
                </div>
            </form>
            <div className='Footerwrapper'>
                <Footer />
            </div>
        </div>
    )
}

export default Register;