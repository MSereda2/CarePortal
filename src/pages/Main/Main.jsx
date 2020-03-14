import React from 'react';
import style from './main.module.css';

// Components
import TaskContainer from '../../components/TaskContainer/TaskContainer';
import MapContainer from '../../components/MapContainer/MapContainer';

const Main = (props) => (
    <div className={style.main}>
        <TaskContainer />
        <MapContainer />
    </div>
)

export default Main;
