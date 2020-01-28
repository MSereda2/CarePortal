import React from 'react';
import style from './nav.module.css';
import PopUp from "reactjs-popup";
import Content from '../popUp/Content';

debugger;
const Nav = (props) => {
    return(
        <nav className={style.nav}>
           <div className={style.nav_wrapper}>
               <div className={style.logo_container}>
                 <img src={props.state.nav.logo} className={style.logo} alt="image" />
                 <h1 className={style.heading}>{props.state.nav.logoName}</h1>
               </div>
               <div className={style.navLinkContainer}>
               <PopUp trigger={<button className={style.create_post}>{props.state.nav.buttonCreate}<i className='fa fa-plus'></i></button>} modal closeOnDocumentClick  contentStyle={{padding: 0, width: `70%`}} >
                    {close => ( <Content close={close} inputs={props.state.createTask.modalWindow.inputs} dispatch={props.dispatch}/>)}
                </PopUp>
                
                <i className={`fa fa-comments ${style.chat_icon}`}><span className={style.counterChat}></span></i>
                <i className={` ${props.state.nav.navNotice.icon} ${style.bell_icon}`}><span className={style.counter}></span></i>
                <img className={style.nav_img} src={props.state.profileUser.profileImg} alt="Profile Img"/>
               </div>
           </div>
        </nav>
    )
}

export default Nav;