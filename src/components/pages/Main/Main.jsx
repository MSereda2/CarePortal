// Packages
import React from "react";
import style from "./main.module.scss";
import { compose } from "redux";
import { connect } from "react-redux";

// Components
import TaskContainer from "../../task-container/task-container";
import MapContainer from "../../map-container/map-container";

// Actions
import {
  showModal,
  closeModal,
} from "../../../redux/reducers/tasks/task_actions";

// HOC
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

// Selectors
import { getTaskSelect } from "../../../redux/reducers/tasks/task_selectors";

class Main extends React.Component {

  render() {
    return (
      <div className={style.main}>
        <TaskContainer {...this.props} />
        <MapContainer />
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  task: getTaskSelect(state),
});

export default compose(
  connect(mapStatetoProps, { showModal, closeModal }),
  withAuthRedirect
)(Main);
