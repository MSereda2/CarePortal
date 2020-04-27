import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './drop-down.module.scss';

// // Firebase
import { auth } from '../../../api/firebase/firebase.utils';

const Dropdown = ({ displayName }) => {

  const [anchorEl, setAnchor] = React.useState(false)


  return (
    <>
      <p onClick={() => setAnchor(!anchorEl)} className={style.profile__name}>
        {displayName}
        <i className="fa fa-angle-down"></i>
      </p>
      {anchorEl &&
        <div className={style.dropdown}>
          <ul>
            <NavLink to="/profile">Профиль</NavLink>
            <li>Сообщения</li>
            <li>Настройки</li>
            <li onClick={() => auth.signOut()}>Выйти</li>
          </ul>
        </div>}

    </>
  )
}




export {
  Dropdown
}