import React from 'react';
import style from './sidebar.module.scss';

const Sidebar = (props) => {

  return(
    <div className={style.sidebar}>
      <div className={style.sidebar__top}>
        <h2 className={style.sidebar__heading}>Welcome 😍</h2>
        <ul className={style.sidebar__links}>
          <li className={style.sidebar__item}><i className="fa fa-user"></i><a href="">Личные данные</a></li>
          <li className={style.sidebar__item}><i className="fa fa-heart"></i><a href="">Задания</a></li>
          <li className={style.sidebar__item}><i className="fa fa-envelope"></i><a href="">Сообщения</a></li>
          <li className={style.sidebar__item}><i className="fa fa-cog"></i><a href="">Настройки</a></li>
        </ul>
      </div>
      <div className={style.sidebar__bottom}>
        <button><i className="fa fa-pied-piper-alt"></i>Выйти</button>
      </div>
    </div>
  )
}

export default Sidebar;