import React from "react";
import style from "./nav.module.css";
import AddTask from '../pages/taskPage/addTask/AddTask';
import UserIcons from './headerIcon/UserIcons';

const Header = props => {
  return (
    <Header className={style.header}>
      <div className={style.header_wrapper}>
        <div className={style.logo_container}>
          <img src={props.header.logo} className={style.logo} alt="logo" />
          <h1 className={style.heading}>{props.Header.logoName}</h1>
        </div>
        <div className={style.headerLinkContainer}>
          <AddTask />
          <UserIcons HeaderNotice={props.header.headerNotice.icon} profileImg={props.profileImg} />
        </div>
      </div>
    </Header>
  );
};

export default Header;
