import React from 'react';
import style from './nav.module.css';
import logo from '../../assets/logo.jpg';
import profileImg from '../../assets/Profileimg.jpg';

import Grid from '@material-ui/core/Grid';


let Nav = () => {

    return (
       
               <div className={style.navbar}>
                   <div className={style.logo}>
                      <img src={logo} alt=""/>
                   </div>
                   <ul className={style.nav}>
                        <li className={style.nav__item}>
                            <a href="" className={style.nav__link}>Главная</a>
                        </li>
                        <li className={style.nav__item}>
                            <a href="" className={style.nav__link}>Продвинутый</a>
                        </li>
                        <li className={style.nav__item}>
                            <a href="" className={style.nav__link}>Помощь</a>
                        </li>
                        <li className={style.nav__item}>
                            <a href="" className={style.nav__link}>Об компании</a>
                        </li>
                   </ul>
                   <div className={style.profile}>
                       <img src={profileImg} alt=""/>
                   </div>
               </div>
    )
}

export default Nav;