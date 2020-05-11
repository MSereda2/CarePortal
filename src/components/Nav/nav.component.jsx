// Packages
import React from "react";
import style from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import UserIcon from "../../assets/img/Vector.png";
import { connect } from 'react-redux'

// Components
import ProfileBlock from "./profile-block/profile-block.component";

// Selectors
import { getProfileImg, getUserData } from '../../redux/reducers/login/login_selectors';

let Nav = (props) => {

  return (
    <nav className={style.navigation}>
      <div className={style.navigation__logo}>
        <h1>Unical</h1>
      </div>
      <ul className={style.navigation__item}>
        <NavLink to="/">Карта</NavLink>
        <NavLink to="/none">none 1</NavLink>
        <NavLink to="/none2">none 2</NavLink>
        <NavLink to="/none3">none 3</NavLink>
      </ul>
      {props.isAuth ? (
        <ProfileBlock {...props} />
      ) : (
          <NavLink className={style.signText} to="/signin">
            <img src={UserIcon} alt="userIcon" />
            Войти / Регестрация
          </NavLink>
        )}

    </nav>
  )
};

const mapStateToProps = (state) => ({
  profileImg: getProfileImg(state),
  userData: getUserData(state)

})

export default connect(mapStateToProps, {})(Nav);





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