import React from 'react';
import {connect} from 'react-redux';
import style from './taskPage.module.css';

import TaskContainer from './taskContainer/TaskContainer.component';
import WrapperMap from './mapContainer/Map';

const TaskPage = (props) => {
    return(
        <div className={style.taskPage}>
          <TaskContainer taskList={props.taskList} />
          <WrapperMap
           />;
        </div>
    )
}

const mapStateToProps = (state) => (
  {
    taskList: state.taskPage.taskContainer.taskList,
  }
)


// const mapDispatchToProps = (dispatch) => {

// }

export default connect(mapStateToProps,null)(TaskPage);