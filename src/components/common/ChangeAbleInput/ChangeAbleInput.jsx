import React from 'react'
import style from './changeAbleInput.module.scss';

const ChangeAbleInput = (props) => {

  const changeInfo = () => {
    if(props.isChangeAllowed) {
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