import React from 'react';
import style from './nav.module.css';
import logo from '../../assets/logo.jpg';
import profileImg from '../../assets/Profileimg.jpg';

import CircleImg from '../common/circleImg/CircleImg';

import {NavLink} from 'react-router-dom';


let Nav = (props) => {

    return (
       
               <div className={style.navbar}>
                   <div className={style.logo}>
                      <img src={props.nav.logoImg} alt=""/>
                   </div>
                   <ul className={style.nav}>
                       {props.nav.links.map(e => (
                           <li key={e.id} className={style.nav__item}>
                              <NavLink  to={e.to} className={style.nav__link}>{e.name}</NavLink>
                           </li>
                       ))}
                        <button>cancel</button>
                   </ul>
                   <CircleImg img={props.profileImg} />
               </div>
    )
}

export default Nav;