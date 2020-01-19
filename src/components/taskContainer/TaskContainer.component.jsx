import React from 'react';
import style from './taskContainer.module.css';

import TaskItem from './taskItem/TaskItem.component';

const Task_container = (props) => {
    return(
        <div className={style.task_container}>
            <div className={style.dd_wrapper}>
                <div className={style.dd_header}>
                    <h3 className={style.dd_header_title}>Все задание</h3>
                    <i className='fa fa-angle-down'></i>
                </div>
            </div>
            <div className={style.task_list}>
            <TaskItem img='https://sun1-22.userapi.com/xqewco6YwoG3uNTiAI9tux7_I1hfwdV3OEMHfg/0D7twNiDFVA.jpg' title="Ищу ученика для проекта сильная личность." cost="500р" time="1 месяц" data="0:48" />
            <TaskItem img='https://sun9-42.userapi.com/c855420/v855420522/e6020/PIygrO_c5z0.jpg' title="Нужна самка на вечер" cost="1500р" time="30мин" data="0:48" />
            <TaskItem img='https://sun9-40.userapi.com/c844720/v844720507/1fe367/zI6WSsL2-Sg.jpg' title="Хочу секса" cost="10р" time="1 месяц" data="1:17" />
            <TaskItem img='https://sun9-8.userapi.com/c856520/v856520157/7e517/7p99z8vSGKg.jpg' title="Сделать за меня дз" cost="500р" time="1 день" data="1:37" />
            <TaskItem img='https://sun9-30.userapi.com/c205520/v205520263/226bb/fVqrYXi94XA.jpg' title="Разработать сайт" cost="4500р" time="3 месяца" data="2:48" />
            </div>
        </div>
    )
}

export default Task_container;