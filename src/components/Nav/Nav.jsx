// Packages
import React from 'react';
import style from './nav.module.css';
import {NavLink} from 'react-router-dom';


// Firebase
import { auth } from '../../firebase/firebase.utils';


import CircleImg from '../common/circleImg/CircleImg';



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
                       {props.isAuth ? <button onClick={() => auth.signOut()}>signOut</button> : <NavLink to='/signin'>signIn</NavLink>}
                        
                   </ul>
                   <CircleImg img={props.profileImg} />
               </div>
    )
}

export default Nav;