import React from "react";
import { connect } from "react-redux";

import style from "./input.module.css";

const Input = props => {
  return props.popUp.map(input => (
    <div className={style.form__group} field>
      <input
        onChange={e => props.changeInput(e)}
        value={input.value}
        type="input"
        className={style.input__field}
        placeholder={input.placeholder}
        name={input.name}
        id={input.id}
      />
      <label for={input.for} class={style.input__label}>
        {input.labelName}
      </label>
    </div>
  ));
};

const mapDispatchToProps = dispatch => ({
  changeInput: e => dispatch(changeInput(e))
});

export default connect(null, mapDispatchToProps)(Input);
