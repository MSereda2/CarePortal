import React from 'react';
import style from './nav.module.css';
import logo from '../../assets/logo.jpg';
import profileImg from '../../assets/Profileimg.jpg';

import CircleImg from '../common/circleImg/CircleImg';

let Nav = (props) => {

    return (
       
               <div className={style.navbar}>
                   <div className={style.logo}>
                      <img src={props.nav.logoImg} alt=""/>
                   </div>
                   <ul className={style.nav}>
                       {props.nav.links.map(e => (
                           <li className={style.nav__item}>
                              <a href="" className={style.nav__link}>{e.name}</a>
                           </li>
                       ))}
                        
                   </ul>
                   <CircleImg img={props.profileImg} />
               </div>
    )
}

export default Nav;