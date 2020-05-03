import React, {FC} from 'react'
import style from './change-input.module.scss';

type propsType = {
  inputName: string,
  isChangeAllowed: boolean,
  labelName: string
}

const ChangeAbleInput:FC<propsType> = ({inputName, isChangeAllowed, labelName}) => {

  const changeInfo = () => {
    if(isChangeAllowed) {
      return <input placeholder={inputName} type="text" />
    } else {
      return <input disabled placeholder={inputName} type="text" />
    }
  }

  return(
    <div className={style.ChangeAbleInput}>
      <label >{labelName}</label>
      {changeInfo()}
    </div>
  )
}

export default ChangeAbleInput;