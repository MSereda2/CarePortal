import React from 'react';
import style from './sidebar.module.scss';
import { NavLink } from 'react-router-dom'

const Sidebar = ({url}) => {

  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__top}>
        <h2 className={style.sidebar__heading}>Welcome
         <span aria-label="lovw" role="img">😍</span>
       </h2>
        <ul className={style.sidebar__links}>
          <NavLink
             activeClassName={style.selected}
             exact
             to={url}
             className={style.sidebar__item}>
             <i className="fa fa-user"></i>
             Личные данные
          </NavLink>

          <NavLink
              activeClassName={style.selected}
              to={`${url}/tasks`}
              className={style.sidebar__item}>
              <i className="fa fa-heart"></i>
             Задания
          </NavLink>

          <NavLink
             className={style.sidebar__item}
             to={`${url}/dialogs`}
             activeClassName={style.selected}>
              <i className="fa fa-envelope"></i>
             Сообщения
          </NavLink>

          <NavLink
            className={style.sidebar__item}
            to={`${url}/settings`}
            activeClassName={style.selected}>
              <i className="fa fa-cog"></i>
              Настройки
          </NavLink>
        </ul>
      </div>
      <div className={style.sidebar__bottom}>
        <button><i className="fa fa-pied-piper-alt"></i>Выйти</button>
      </div>
    </div>
  )
}

export default Sidebar;