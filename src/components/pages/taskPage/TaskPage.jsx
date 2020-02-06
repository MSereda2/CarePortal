import React from 'react';
import {connect} from 'react-redux';

import TaskContainer from './taskContainer/TaskContainer.component';
import MapGetLocation from './mapContainer/MapGetLocation';

const TaskPage = (props) => {
    return(
        <div>
          <TaskContainer taskList={props.taskList} />
          <MapGetLocation />
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