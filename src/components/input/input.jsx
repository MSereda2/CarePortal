import React from 'react';

const Input = (props) => {

  const onChangeInput = (e) => {
     props.ChangeInput(e)
  }
    
    return(
      props.popUp.map(input => (
        <div class={style.form__group} field>
            <input onChange={onChangeInput} value={input.value} type="input" className={style.input__field} placeholder={input.placeholder} name={input.name} id={input.id} />
            <label for={input.for} class={style.input__label}>
            {input.labelName}
            </label>
        </div>
      ))
    )
}

export default Input;