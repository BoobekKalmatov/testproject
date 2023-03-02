import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Registration.css'
import { useDispatch, useSelector } from 'react-redux'
import { registerpostdata } from '../../store/reducers/regis.reducer';


function Registration() {

    const [postUser, setPostuser] = useState({
        password: '',
        email: '',
        username: '',
    });
    const state =  useSelector(state => state)
    const loading = state.loading;
    
    const dispatch = useDispatch();

    const registerchange = e => {
        setPostuser(res => {
            return {
                ...res,
                [e.target.name]: e.target.value
            }
        })
    }

  

    const submitRegister = e => {
        e.preventDefault();
        dispatch(registerpostdata(postUser))
    }




  return (
    <div className='registration__cotainer'>
        <form onSubmit={submitRegister}>
            <h2 className="registration__title">Регистрация</h2>

            <div className="text-link__block">
                <span className="registration__text">Вы ужу зарегистрированы?</span>
                <NavLink className='registration__link' to='/'>войти</NavLink>
            </div>

            <div className='input__block'>
                <input onChange={registerchange}  name='email' type="email" placeholder='boobekkalmatov@gmail.com' className="email" />
                <input onChange={registerchange} name='password' type="password" placeholder='password' className="password" />
            </div>

            <button className='btn' disabled={loading} >отправить</button>
        </form>
    </div>
  )
}

export default Registration