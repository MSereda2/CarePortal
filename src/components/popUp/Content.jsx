import React from "react";
import { connect } from "react-redux";
import style from "./content.module.css";

// REDUX ACTIONS
import {
  addTask,
  changeTask,
  changeDescription,
  changeAddress,
  changeCost
} from "../../redux/task/task.actions";

const Content = props => {
  return (
    <div className={style.module}>
      <div className={style.taskColumn}>
        <p className={style.taskTitle}>Create task</p>
        <div className={style.form__group} field>
          <input
            onChange={e => props.changeTask(e.target.value)}
            type="input"
            className={style.input__field}
            placeholder="Task name"
            value={props.inputs.task}
          />
          <label className={style.input__label}>Task name</label>
        </div>
        <div className={style.form__group} field>
          <input
            onChange={e => props.changeDescription(e.target.value)}
            type="input"
            className={style.input__field}
            placeholder="Describe task"
            value={props.inputs.description}
          />
          <label className={style.input__label}>Describe task</label>
        </div>
        <div className={style.form__group} field>
          <input
            onChange={e => props.changeAddress(e.target.value)}
            type="input"
            className={style.input__field}
            placeholder="Your Address"
            value={props.inputs.address}
          />
          <label className={style.input__label}>Your Address</label>
        </div>
        <button>Поиск по карте</button>
        <div className={style.form__group} field>
          <input
            onChange={e => props.changeCost(e.target.value)}
            type="input"
            className={style.input__field}
            placeholder="Cost"
            value={props.inputs.cost}
          />
          <label className={style.input__label}>Cost</label>
        </div>
        <button className={style.btn_addPost} onClick={() => props.addTask()}>
          Создать задание
        </button>
      </div>
      <div className={style.imgContainer}></div>
    </div>
  );
};
const mapStateToProps = state => ({
  state,
  inputs: state.task.inputs
});
const mapDispatchToProps = dispatch => ({
  addTask: () => dispatch(addTask()),
  changeTask: text => dispatch(changeTask(text)),
  changeDescription: text => dispatch(changeDescription(text)),
  changeAddress: text => dispatch(changeAddress(text)),
  changeCost: text => dispatch(changeCost(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
