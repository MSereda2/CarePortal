// Packages
import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './profileBlock.module.scss'

import CircleImg from '../../common/circleImg/CircleImg';

// Firebase
import { auth } from '../../../api/firebase/firebase.utils';

// Components
import BtnMain from '../../common/btnMain/BtnMain';

export default function SimpleMenu(props) {
  

  return (
    <div className={style.profileBlock}>
      <div className={style.createTask}>
        <NavLink to='/createTask'>
          <BtnMain />
        </NavLink >
      </div>
       <CircleImg img={props.profileImg} />

    </div>
  );
}