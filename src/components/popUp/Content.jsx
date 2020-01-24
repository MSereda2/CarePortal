import React, {ReactDOM} from 'react';
import style from './content.module.css';


const Content = (props) => {

   const onAddTask = () => {
        props.taskFun.addTask();
   }

   const onChangeTask = (e) => {
      let text = e.target.value; 
      props.inputs[0].changeTask(text);
   }

   const onChangeDescription = (e) => {
      let text = e.target.value; 
      props.inputs[1].changeDescription(text);

   }

   const onChangeAdress = (e) => {
      let text = e.target.value;
      props.inputs[2].changeAdress(text);

   }

   const onChangeCost = (e) => {
      let text = e.target.value; 
      props.inputs[3].changeCost(text);  
   }

    return(
    <div className={style.module}>
        <div className={style.taskColumn}>

            <p className={style.taskTitle}>Создать Пост</p>
                <div class={style.form__group} field>
                    <input onChange={onChangeTask} type="input" className={style.input__field} placeholder={props.inputs[0].placeholder} id={props.inputs[0].id} value={props.inputs[0].task} />
                    <label class={style.input__label}>{props.inputs[0].labelName}</label>
                </div>
                <div class={style.form__group} field>
                    <input onChange={onChangeDescription} type="input" className={style.input__field} placeholder={props.inputs[1].placeholder} id={props.inputs[1].id} value={props.inputs[1].description} />
                    <label class={style.input__label}>{props.inputs[1].labelName}</label>
                </div>
                <div class={style.form__group} field>
                    <input onChange={onChangeAdress} type="input" className={style.input__field} placeholder={props.inputs[2].placeholder} id={props.inputs[2].id} value={props.inputs[2].adress} />
                    <label class={style.input__label}>{props.inputs[2].labelName}</label>
                </div>
                <div class={style.form__group} field>
                    <input onChange={onChangeCost} type="input" className={style.input__field} placeholder={props.inputs[3].placeholder} id={props.inputs[3].id} value={props.inputs[3].cost} />
                    <label class={style.input__label}>{props.inputs[3].labelName}</label>
                </div>
            <button className={style.btn_addPost} onClick={onAddTask}>Создать задание</button>
        </div>
        <div className={style.imgContainer}></div>
    </div>
    )
   
}

export default Content;
