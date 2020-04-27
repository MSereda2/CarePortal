// Packages
import React from 'react';
import style from './profileBlock.module.scss';
import {NavLink} from 'react-router-dom';

// Components
import BtnMain from '../../common/btn-main/BtnMain';
import {Dropdown} from '../drop-down/drop-down.component';



const ProfileBlock = ({profileImg,userData}) => {
  
  
  return (
    <div className={style.profile}>
      <div className={style.createTask}>
        <NavLink to='/createTask'>
          <BtnMain text="Создать пост" />
        </NavLink >
      </div>
      <div className={style.profile__img}>
        <div className={style.imgContainer}>
            <img src={profileImg} alt="circleImg"/>
        </div>
      </div>
      
      <Dropdown displayName={userData.displayName}/>
    </div>
  );
}

export default ProfileBlock;