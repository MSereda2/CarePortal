import React from 'react';
import style from './sideNav.module.css'

const SideBar = (props) => (
    <div className={style.sidebar}>
        <div className={style.pageIcon_container}>
            <a href="#" className={`fa fa-map ${style.active}`}></a>
            <a href="#" className='fa fa-music'></a>
            <a href="#" className='fa fa-book'></a>
            <a href="#" className='fa fa-cogs'></a>
            <a href="#" className='fa fa-exclamation-circle'></a>
            <a href="#" className='fa fa-tasks'></a>
        </div>
    </div>
)

export default SideBar;