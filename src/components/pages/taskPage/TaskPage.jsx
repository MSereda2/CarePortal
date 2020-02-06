import React from 'react';
import {connect} from 'react-redux';
import style from './taskPage.module.css';

import TaskContainer from './taskContainer/TaskContainer.component';
import MapGetLocation from './mapContainer/MapGetLocation';

const TaskPage = (props) => {
    return(
        <div className={style.task_page}>
          <MapGetLocation 
             center={{lat: 18.5204, lng: 73.8567}}
             height='92vh'
             zoom={15}
             center={{lat: 15, lng: 45}} />
          <TaskContainer taskList={props.taskList} />
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