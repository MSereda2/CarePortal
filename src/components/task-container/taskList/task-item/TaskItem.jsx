
import React from 'react';
import style from './taskItem.module.scss';


import clock from '../../../../assets/img/clock.png'

// Components
import CircleImg from '../../../common/circle-img/CircleImg';
import TaskModal from '../../task-modal/TaskModal';

let TaskItem = (props) => {
    const { cost, description, id, photoURL, time, title, showModal } = props;

    const limitLength = (description) => {
        let descArr = description.split(' ');
        if (descArr.length > 18) {
            let newDes = [];
            for (let i = 0; i < 18; i++) {
                newDes = [...newDes, descArr[i]]
            }
            newDes.push('...');
            return newDes.join(' ')
        } else {
            return description;
        }
    }

    return (
        <>
            <div className={style.taskItem} onClick={() => { showModal(id) }}>
                <CircleImg img={photoURL} />
                <div className={style.taskInfo}>
                    <h4 className={style.taskTitle}>{title}</h4>
                    <p className={style.taskDescription}>{limitLength(description)}</p>
                    <p className={style.taskLocation}>Задание в 400м</p>

                </div>
                <div className={style.taskOrder}>
                    <div>
                        <p className={style.taskCost}>{cost}<span>₽</span></p>
                        <p className={style.taskTime}>{time}ч. <img src={clock} className={style.clock} alt='icon clock' /> </p>
                    </div>
                    <button className={style.btn}>Начать <i className='fa fa-play'></i></button>
                </div>
            </div>
            <TaskModal {...props} />
        </>
    )

}

export default TaskItem;