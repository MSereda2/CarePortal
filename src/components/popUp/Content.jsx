import React from 'react';
import style from './content.module.css';


const Content = (props) => {

    let input_1 = React.createRef();
    let input_2 = React.createRef();
    let input_3 = React.createRef();
    let input_4 = React.createRef();
    let input_5 = React.createRef();

 
   const onChangeInput = (event) => {
        debugger
       let text = input_1.current.value;
       props.taskFun.ChangeInput(text)
   }

   const onAddTask = () => {
       props.taskFun.addTask();
   }

    return(
    <div className={style.module}>
        <div className={style.taskColumn}>

            <p className={style.taskTitle}>Создать Пост</p>

                {props.popUp.map((input,i) => (
                <div class={style.form__group} field>
                    <input onChange={onChangeInput} ref={input_1} value={input.value} type="input" className={style.input__field} placeholder={input.placeholder} name={input.name} id={input.id} />
                    <label for={input.for} class={style.input__label}>
                    {input.labelName}
                    </label>
                </div>
                 ))
                 }  
                   
            <button className={style.btn_addPost} onClick={onAddTask}>Создать задание</button>
        </div>
        <div className={style.imgContainer}></div>
    </div>
    )
   
}

export default Content;
