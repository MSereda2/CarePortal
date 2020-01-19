import React from 'react';
import style from './nav.module.css'

const Nav = (props) => {
    return(
        <nav className={style.nav}>
           <div className={style.nav_wrapper}>
               <div className={style.logo_container}>
                 <img src={require('../../logo.jpg')} className={style.logo} alt="image" />
                 <h1 className={style.heading}>Care <span className={style.word}>Portal</span></h1>
               </div>
               <div className={style.link_navigation}>
                   <a href="#">Dashbord</a>
                   <a href="#">Policy managment</a>
                   <a href="#">User managment</a>
                   <a href="#">Settings</a>
               </div>
               <div className={style.navLinkContainer}>
                   <i className={`fa fa-bell ${style.bell_icon}`}><span className={style.counter}>4</span></i>
                   <img className={style.nav_img} src="https://pm1.narvii.com/5916/7176cd77492a118eec62839be7c078dfbe675621_hq.jpg" alt=""/>
                   <p className={style.create_post}>Создать пост</p>
               </div>
           </div>
        </nav>
    )
}

export default Nav;