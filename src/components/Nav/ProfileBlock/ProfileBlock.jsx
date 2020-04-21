// Packages
import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './profileBlock.module.scss';

// Components
import BtnMain from '../../common/BtnMain/BtnMain';

// // Firebase
import {auth} from '../../../api/firebase/firebase.utils'

const ProfileBlock = (props) => {
  
  const [dropdown, setDropdown] = React.useState(false)

  const showDropdown = () => (
    dropdown && <div className={style.profile__dropdown}>
        <ul>
          <NavLink to="/profile">Профиль</NavLink>
          <li>Сообщения</li>
          <li>Настройки</li>
          <li onClick={() => auth.signOut()}>Выйти</li>
        </ul>
      </div>
  )

  return (
    <div className={style.profile}>
      <div className={style.createTask}>
        <NavLink to='/createTask'>
          <BtnMain />
        </NavLink >
      </div>
      <div className={style.profile__img}>
        <div className={style.imgContainer}>
            <img src={props.profileImg} alt="circleImg"/>
        </div>
      </div>
      <p onClick={() => setDropdown(!dropdown)} className={style.profile__name}>Misha sereda <i className="fa fa-angle-down"></i> </p>
      {showDropdown()}
    </div>
  );
}

export default ProfileBlock;