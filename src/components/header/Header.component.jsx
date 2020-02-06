import React from "react";
import style from "./nav.module.css";
import AddTask from '../pages/taskPage/addTask/createTask/CreateTask';
import UserIcons from './headerIcon/UserIcons';

const Header = props => {
  return (
    <Header className={style.header}>
      <div className={style.header_wrapper}>
        <div className={style.logo_container}>
          <img src={props.header.logo} className={style.logo} alt="logo" />
          <h1 className={style.heading}>{props.header.logoName}</h1>
        </div>
        <div className={style.headerLinkContainer}>
          <AddTask />
          <UserIcons headerNotice={props.header.headerNotice.icon} userImg={props.userImg} />
        </div>
      </div>
    </Header>
  );
};

export default Header;
