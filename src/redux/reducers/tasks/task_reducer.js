import user1 from '../../../assets/user1.jpg';
import user2 from '../../../assets/user2.jpg';
import user3 from '../../../assets/user3.jpg';
import user4 from '../../../assets/use4.jpg';

import {task_types} from './task_types';

const initialState = {
    taskCounter: null,
    task: [
        {   id: 0,
            img: user1,
            title: 'Подмести двор',
            description: 'Я работаю 24/7 по этому нет времени следить за порядком, если вы подметете хорошо, можно договориться для постоянной работы.',
            cost: 150,
            time: 4,
            btnStart: true,
            coordinates: {lat: 45.030268, lng: 38.980321},
            isShowModal: false

        },
        {   id: 1,
            img: user2,
            title: 'Подготовить дом к вечеринке',
            description: 'Ключи от дома у меня, нужно просто нарезать все фрукты и овощи, а так же разложить все для гостей.',
            cost: 450,
            time: 10,
            btnStart: true,
            coordinates: {lat: 45.032261, lng: 38.982119},
            isShowModal: false
        },
        {   id: 2,
            img: user3,
            title: 'Снять кота с дерева',
            description: 'Мой кот залез на дерево и сидит там уже 3 часа, я боюсь высоты, тому кто снимет кота с дерева ждет вознаграждение.',
            cost: 950,
            time: 20,
            btnStart: true,
            coordinates: {lat: 45.033259, lng: 38.983511},
            isShowModal: false
        },
        {   
            id: 3,
            img: user4,
            title: 'Написать текст по тз',
            description: 'Есть уже четкое и конкретное тз, все остальные нюансы расскажу лично.',
            cost: 1250,
            time: 1,
            btnStart: true,
            coordinates: {lat: 45.034249, lng: 38.985805},
            isShowModal: false
        }
    ],
}

let task_reducer = (state = initialState, action) => {
    switch(action.type) {
        case task_types.SHOW_MODAL:
            return {
                ...state,
                task: state.task.map(el => {
                    if(el.id === action.id) {
                        return{ ...el, isShowModal: true}
                    } else {
                        return {...el, isShowModal: false}
                    }
                    return el;
                })
            }
        case task_types.CLOSE_MODAL:
            return {
                ...state,
                task: state.task.map(el => {
                    if(el.id === action.id) {
                        return{ ...el, isShowModal: false}
                    } 
                    return el;
                })
            }   

        default: return state
    }
}

export default task_reducer;