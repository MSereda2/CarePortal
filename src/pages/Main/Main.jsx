// Packages
import React from 'react';
import style from './main.module.css';
import {compose} from 'redux';
import {connect} from 'react-redux'

// Components
import TaskContainer from '../../components/TaskContainer/TaskContainer';
import MapContainer from '../../components/MapContainer/MapContainer';

// Actions
import {showModal, closeModal} from '../../redux/reducers/tasks/task_actions';

// HOC
import {withAuthRedirect} from '../../components/HOC/withAuthRedirect';

class Main extends React.Component {

    

    render() {
        
        return(
            <div className={style.main}>
                <TaskContainer {...this.props} />
                <MapContainer />
            </div>
        )
    }
    
}

const mapStatetoProps = (state) => ({
    task: state.task.task
})

export default compose(
    connect(mapStatetoProps, {showModal, closeModal}),
    withAuthRedirect
)(Main) ;
