import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export const withSubmitForm = (Componet) => {

    let RedirectComponent = (props) => {
        // props.submitSucceeded
        //1. Войти в компоненту
        //2. При нажатие проверить что бы все поля были заполненты
        //3. Показать лоудер покаместь создается задание
        //4. После того как задание создалось ридеркнуть на главную
      
        if(props.isFetching === false && props.submitSucceeded === true) {return <Redirect to='/' /> }       
        console.log("props 1 SubmitFormm")
        return <Componet {...props} />
    }

    return RedirectComponent
    // return connect(mapStateToSubmitForm, {})(RedirectComponent)
}

// const mapStateToSubmitForm = state => ({
//     isFetching: state.task.isFetching
// })



/* 
1. Мне нужно показывать спиненер в компоненте покаместе создаётся задания
2. Я обернул все компоненту создания задания в HOC у указал в HOC if isFetching true тогда покажи спиненр если false тогда верни копоненту тоесть CreateTask
3. Переключаю я флаг isFetching в санке где отправляется это запрос.
4. Перелючение происходит тогда когда я нажимаю на кнопку создать задание
TASK: Первое что нужно сделать это включить спинер покамсте создается и потом убрать его как задание создаться
5. Следующее мне нужно когда спинер убирается сделать redirect на главную флаг isFetching: false говорит о том что спинера нете.
6. Для этого я могу повесить хук на мою форму в котором в props придет isFetching и если он false значит нужно редерекнуть компоненту.
7. Но теперь возникает другая проблема я не могу попасть в компоненту потомучто он покравает все и isFetching когда истина меня сразу редерикнет. Мне нужно сделать так что бы он ридерекнул только после нажатие. Но я могу повесеть дополнительную проверку в которой сказано что кнопка должна быть нажата
TASK: Редерекнуть компоненту только в том случае если isFetching false и кнопка была нажата

*/