import React from 'react';
import style from './nav.module.css'

const Nav = (props) => {
    return(
        <nav className={style.nav}>
           <div className={style.nav_wrapper}>
               <div className={style.logo_container}>
                 <h1 className={style.heading}>Care Portal</h1>
                 <img src={require('../../logo.jpg')} className={style.logo} alt="image" />
               </div>
               <div className={style.navLinkContainer}>
                   <img src="https://pm1.narvii.com/5916/7176cd77492a118eec62839be7c078dfbe675621_hq.jpg" alt=""/>
                   <p className={style.create_post}>Создать пост</p>
               </div>
           </div>
        </nav>
    )
}

export default Nav;