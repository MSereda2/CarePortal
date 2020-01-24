import React from 'react';

const inputCombine = (props) => (
    <input type="input" class={style.input__field} placeholder={props.popUp.placeholder} name={props.popUp.name} id={props.popUp.id} required />
    <label for={props.popUp.for} class={style.input__label}>
    {props.popUp.labelName}
    </label>
)