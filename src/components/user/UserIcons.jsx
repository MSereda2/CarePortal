import React from 'react';
import style from './userIcons.module.css';
import { connect } from "react-redux";


const UserIcons = props => (
    <div className={style.userContainer}>
    <i className={`fa fa-comments ${style.chat_icon}`}>
      <span className={style.counterChat}></span>
    </i>
    <i className={` ${props.navNotice} ${style.bell_icon}`}>
      <span className={style.counter}></span>
    </i>
    <img
      className={style.nav_img}
      src={props.profileImg}
      alt="Profile Img"
    />
  </div>
)

export default UserIcons;