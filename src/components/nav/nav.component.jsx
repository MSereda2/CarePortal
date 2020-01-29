import React from "react";
import style from "./nav.module.css";
import PopUp from "reactjs-popup";
import Content from "../popUp/Content";

const Nav = props => {
  return (
    <nav className={style.nav}>
      <div className={style.nav_wrapper}>
        <div className={style.logo_container}>
          <img src={props.nav.logo} className={style.logo} alt="logo" />
          <h1 className={style.heading}>{props.nav.logoName}</h1>
        </div>
        <div className={style.navLinkContainer}>
          <PopUp
            trigger={
              <button className={style.create_post}>
                {props.nav.buttonCreate}
                <i className="fa fa-plus"></i>
              </button>
            }
            modal
            closeOnDocumentClick
            contentStyle={{ padding: 0, width: `70%` }}
          >
            {close => (
              <Content
                close={close}
                inputs={props.task.modalWindow.inputs}
                dispatch={props.dispatch}
              />
            )}
          </PopUp>

          <i className={`fa fa-comments ${style.chat_icon}`}>
            <span className={style.counterChat}></span>
          </i>
          <i className={` ${props.nav.navNotice.icon} ${style.bell_icon}`}>
            <span className={style.counter}></span>
          </i>
          <img
            className={style.nav_img}
            src={props.profileImg}
            alt="Profile Img"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
