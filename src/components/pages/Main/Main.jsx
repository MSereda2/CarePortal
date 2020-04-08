// Packages
import React from 'react';
import style from './main.module.scss';
import {compose} from 'redux';
import {connect} from 'react-redux'

// Components
import TaskContainer from '../../TaskContainer/TaskContainer';
import MapContainer from '../../MapContainer/MapContainer';

// Actions
import {showModal, closeModal, getTask} from '../../../redux/reducers/tasks/task_actions';

// HOC
import {withAuthRedirect} from '../../HOC/withAuthRedirect';

// Firebase
import {firestore, convertCollectionSnapShottoMap} from '../../../api/firebase/firebase.utils';

class Main extends React.Component {

    componentDidMount() {
        const collectionRef = firestore.collection('tasks');
        collectionRef.onSnapshot(async snapShot => {
          const dataTask = await convertCollectionSnapShottoMap(snapShot);
          this.props.getTask(dataTask)
        })
    }

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
    task: state.task.task,
})

export default compose(
    connect(mapStatetoProps, {showModal, closeModal, getTask}),
    withAuthRedirect
)(Main) ;
