// Packages
import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './profileBlock.module.scss';
import {connect} from 'react-redux';

// Components
import BtnMain from '../../common/btnMain/BtnMain';

// // Firebase
// import {unsubscribeFromAuth} from '../../../redux/reducers/login/login_thunk';
import {auth} from '../../../api/firebase/firebase.utils'

const ProfileBlock = (props) => {
  
  const [dropdown, setDropdown] = React.useState(false)

  const showDropdown = () => (
    dropdown && <div className={style.profileDropdown}>
        <ul>
          <li>Профиль</li>
          <li>Сообщения</li>
          <li>Настройки</li>
          <li onClick={() => auth.signOut()}>Выйти</li>
        </ul>
      </div>
  )

  return (
    <div className={style.profileBlock}>
      <div className={style.createTask}>
        <NavLink to='/createTask'>
          <BtnMain />
        </NavLink >
      </div>
      <div className={style.profileImg}>
        <div className={style.imgContainer}>
            <img onClick={() => setDropdown(!dropdown)} src={props.profileImg} alt="circleImg"/>
        </div>
      </div>
      {showDropdown()}
    </div>
  );
}

export default connect(null, {})(ProfileBlock)