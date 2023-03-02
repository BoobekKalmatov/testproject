import React from 'react'
import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom';
import linia from '../../images/linia.svg'
import { useState } from 'react';
import google from '../../images/Google.svg';
import facebook from '../../images/facebook.svg';
import apple from '../../images/apple.svg';
import chat from '../../images/chat.svg';
import logo from '../../images/logoharvex.svg'
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../store/reducers/auth.reducer';
import { useAuth0 } from "@auth0/auth0-react";
function Login() {

    const [btns, setBtns] = useState([
        {color: '#fff', class: 'register1', text: 'Продолжить с Google', icon: google},
        {color: 'blue',  class: 'register2', text: 'Продолжить с Facebook', icon: facebook},
        {color: 'black', class: 'register2', text: 'Продолжить с Apple', icon: apple},
    ]);

    const LoginButton = () => {
        const { loginWithRedirect } = useAuth0();
      
        return <button onClick={() => loginWithRedirect()}>Log In</button>;
      };


    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handlerChange = (e) => {
         setUser(user => {
            return {
                ...user,
                [e.target.name]: e.target.value
            }
         })
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHndler = e => {
        e.preventDefault();
        dispatch(fetchUser(user))
        
        navigate('/');
    }

  return (
    <div className='login'>
        <div className="login__container">
            <h1 className="login__title">Войти</h1>
            <div className="link_block">
                <span className="link-text">Новый пользователь?</span>
                <NavLink className='link-register' to='/register'>Создать учотную запись</NavLink>
            </div>
    
            <form onSubmit={submitHndler} className='login-form'>
                <div className='form-block'>
                    <span className='form-text'>Адрес электронной почты</span>
                    <input onChange={handlerChange} className='input-login' name='email' type="email" placeholder='Введите ваш email' />
                </div>
                <button className='login-btn'>Продолжить</button>
            </form>
        </div>

        <div className="ili-block">
            <img src={linia} alt="" />
            <span className="ili">Или</span>
            <img src={linia} alt="" />
        </div>

        <div className="btns-register">
            {
                btns.map(btn => {
                    return (
                        <a href='#' className={btn.class} style={{background: btn.color}}>
                            <img src={btn.icon} alt={btn.icon} className="btn-icon" />
                            {btn.text}
                        </a>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Login