import React from 'react';
import style from './taskList.module.css';

// Components
import TaskItem from './taskItem/TaskItem';

import user1 from '../../../assets/user1.jpg';
import user2 from '../../../assets/user2.jpg';
import user3 from '../../../assets/user3.jpg';
import user4 from '../../../assets/use4.jpg';




class TaskList extends React.Component {

    render() {

        return(
           <div className={style.taskList}>
              <TaskItem taskTitle={'Подмести двор'} taskDescription={'Я работаю 24/7 по этому нет времени следить за порядком, если вы подметете хорошо, можно договориться для постоянной работы.'} taskCost={'150р'} taskTime={'3 ч.'} img={user1} />
              <TaskItem taskTitle={'Подготовить дом к вечеринке'} taskDescription={'Ключи от дома у меня, нужно просто нарезать все фрукты и овощи, а так же разложить все для гостей.'} taskCost={'650р'} taskTime={'8 ч.'} img={user2} />
              <TaskItem taskTitle={'Снять кота с дерева'} taskDescription={'Мой кот залез на дерево и сидит там уже 3 часа, я боюсь высоты, тому кто снимет кота с дерева ждет вознаграждение.'} taskCost={'1550р'} taskTime={'1 ч.'} img={user3} />
              <TaskItem taskTitle={'Написать текст по тз'} taskDescription={'Есть уже четкое и конкретное тз, все остальные нюансы расскажу лично. '} taskCost={'5000'} taskTime={'1 д.'} img={user4} />
              
           </div>
        )
    }
}

export default TaskList;