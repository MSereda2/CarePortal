// Packages
import React from "react";
import style from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import UserIcon from "../../assets/Vector.png";

// Components
import ProfileBlock from "./ProfileBlock/ProfileBlock";

let Nav = (props) => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        {/* <img src={props.nav.logoImg} alt="logo" /> */}
        <i className='fa fa-bars'></i>
      </div>
      <ul className={style.nav}>
       
      </ul>
      {props.isAuth ? (
        <ProfileBlock profileImg={props.profileImg} />
      ) : (
        <NavLink className={style.signText} to="/signin">
          <img src={UserIcon} alt="userIcon" />
          Войти / Регестрация
        </NavLink>
      )}
    </div>
  );
};

export default Nav;



// {props.nav.links.map((e) => (
//   <li key={e.id} className={style.nav__item}>
//     <NavLink to={e.to} className={style.nav__link}>
//       {e.name}
//     </NavLink>
//   </li>
// ))}