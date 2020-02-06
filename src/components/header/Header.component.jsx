import React from "react";
import style from "./header.module.css";
import PopUp from '../pages/taskPage/addTask/PopUp';
import UserIcons from './headerIcon/UserIcons';

const Header = props => {
  return (
    <header className={style.header}>
      <div className={style.header_wrapper}>
        <div className={style.logo_container}>
          <img src={props.headerState.logo} className={style.logo} alt="logo" />
          <h1 className={style.heading}>{props.headerState.logoName}</h1>
        </div>
        <div className={style.headerLinkContainer}>
          <PopUp />
          <UserIcons headerNotice={props.headerState.headerNotice.icon} userImg={props.headerState.userImg} />
        </div>
      </div>
    </header>
  );
};

export default Header;
