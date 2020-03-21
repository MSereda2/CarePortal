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
import {withAuthRedirect} from '../../HOC/withAuthRedirect';

class Main extends React.Component {

    

    render() {
        return(
            <div className={style.main}>
                <TaskContainer task={this.props.task} />
                <MapContainer />
            </div>
        )
    }
    
}

const mapStatetoProps = (state) => ({
    isAuth: state.login.isAuth,
    task: state.task.task
})

export default compose(
    withAuthRedirect,
    connect(mapStatetoProps, {showModal, closeModal}))(Main) ;
