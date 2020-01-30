import React from 'react';
import PopUp from "reactjs-popup";
import Content from "./Content";
import style from "./popUp.module.css";

const Popup = props => (
    <PopUp
    trigger={
      <button className={style.create_post}>
        Create Task
        <i className="fa fa-plus"></i>
      </button>
    }
    modal
    closeOnDocumentClick
    contentStyle={{ padding: 0, width: `70%` }}>

    {close => <Content close={close} />}
    
  </PopUp>
)

export default Popup;