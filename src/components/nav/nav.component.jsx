import React from "react";
import style from "./nav.module.css";
import AddTask from '../AddTask/AddTask';
import UserIcons from '../user/UserIcons';

const Nav = props => {
  return (
    <nav className={style.nav}>
      <div className={style.nav_wrapper}>
        <div className={style.logo_container}>
          <img src={props.nav.logo} className={style.logo} alt="logo" />
          <h1 className={style.heading}>{props.nav.logoName}</h1>
        </div>
        <div className={style.navLinkContainer}>
          <AddTask />
          <UserIcons navNotice={props.nav.navNotice.icon} profileImg={props.profileImg} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
