import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './drop-down.module.scss';
import Popup from "reactjs-popup";


// // Firebase
import { auth } from '../../../api/firebase/firebase.utils';

const Dropdown = ({ displayName }) => {

  const Content = () => (
    <ul className={style.dropdown}>
      <NavLink to="/profile">Профиль</NavLink>
      <li>Сообщения</li>
      <li>Настройки</li>
      <li onClick={() => auth.signOut()}>Выйти</li>
    </ul>
  )

  return (
    <Popup
      closeOnDocumentClick
      contentStyle={{
        width: '13rem',
        fontSize: '1.5rem',
        padding: '1rem'
      }}
      trigger={
        <p className={style.profile__name}>
          {displayName}
          <i className="fa fa-angle-down"></i>
        </p>
      }
      position="bottom center"
    >
      <Content />
    </Popup>
  )
}




export {
  Dropdown
}