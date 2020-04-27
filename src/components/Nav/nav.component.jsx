// Packages
import React from "react";
import style from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import UserIcon from "../../assets/img/Vector.png";
import { connect } from 'react-redux'

// Components
import ProfileBlock from "./profile-block/profile-block.component";

// Selectors
import {getProfileImg,getUserData} from '../../redux/reducers/login/login_selectors';
 
let Nav = (props) => {
 
  return (
    <div className={style.navigation}>
    <input type="checkbox" className={style.navigation__checkbox} id="navi-toggle" />

    <label for="navi-toggle" className={style.navigation__button}>
        <span className={style.navigation__icon}>&nbsp;</span>
    </label>

    <div className={style.navigation__background}>&nbsp;</div>

    <nav className={style.navigation__nav}>
        <ul className={style.navigation__list}>
          <li className={style.navigation__item}>
            <NavLink to="/" href="#" className={style.navigation__link}>Главная</NavLink>
          </li>
          <li className={style.navigation__item}>
            <NavLink to="/advanced" href="#" className={style.navigation__link}>Продвинутый</NavLink>
          </li>
          <li className={style.navigation__item}>
            <NavLink to="/users" href="#" className={style.navigation__link}>Пользователи</NavLink>
          </li>
          <li className={style.navigation__item}>
            <NavLink to="/answers" href="#" className={style.navigation__link}>Ответы</NavLink>
          </li>
        </ul>
        
    </nav>
    {props.isAuth ? (
        <ProfileBlock {...props} />
      ) : (
        <NavLink className={style.signText} to="/signin">
          <img src={UserIcon} alt="userIcon" />
          Войти / Регестрация
        </NavLink>
      )}
    </div>
  )
};

const mapStateToProps = (state) => ({
  profileImg: getProfileImg(state),
  userData: getUserData(state)

})

export default connect(mapStateToProps, {})( Nav);


/*<div className={`${style.menu} ${addClass()}`}>
      <button onClick={() => showMenu(!menu)} className={style.menu__toggle}>
        {/* <i className='fa fa-bars'></i> }
        <span aria-hidden="true"></span>
      </button>
      <nav className={style.nav}>
        <ul>
          <li>lorem1</li>
          <li>lorem1</li>
          <li>lorem1</li>
          <li>lorem1</li>
        </ul>
      </nav>
      {props.isAuth ? (
        <ProfileBlock {...props} />
      ) : (
        <NavLink className={style.signText} to="/signin">
          <img src={UserIcon} alt="userIcon" />
          Войти / Регестрация
        </NavLink>
      )}
    </div> */