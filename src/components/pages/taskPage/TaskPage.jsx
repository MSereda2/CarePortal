import React from 'react';
import {connect} from 'react-redux';
import style from './taskPage.module.css';

import TaskContainer from './taskContainer/TaskContainer.component';
import WrapperMap from './mapContainer/MapContainer';

const TaskPage = (props) => {
    return(
        <div className={style.taskPage}>
          <TaskContainer taskList={props.taskList} />
          <WrapperMap     googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0&libraries=places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={
                <div style={{ height: `100%` }} />
                }
                containerElement={
                <div style={{ height: '89vh' }} />
                }
                mapElement={
                <div style={{ height: `100%` }} />
                }/>;
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