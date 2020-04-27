import React from 'react'
import style from './change-input.module.scss';

const ChangeAbleInput = (props) => {

  const changeInfo = () => {
    if(props.isChangeWAllowed) {
      return <input placeholder={props.inputName} type="text" />
    } else {
      return <input disabled placeholder={props.inputName} type="text" />
    }
  }

  return(
    <div className={style.ChangeAbleInput}>
      <label >{props.labelName}</label>
      {changeInfo()}
    </div>
  )
}

export default ChangeAbleInput;