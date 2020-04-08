// Packages
import React from 'react';
import Map from './Map/Map';
import {connect} from 'react-redux';
import style from './mapContainer.module.css';

// Actions
import {showModal, closeModal} from '../../redux/reducers/tasks/task_actions';

// Thunk Creator 
import {SetUserLocationCreator} from '../../redux/reducers/map/map_thunk';




class MapContainer extends React.Component {
   

    componentDidMount = () => {
        this.props.SetUserLocationCreator(this.props.userLocation)
    }

    render() {
        return (
            <div className={style.map}>
                <Map {...this.props} />                  
            </div>
          
        );
    }
}

const mapStateToProps = (state) => ({
    streetName: state.map.streetName,
    userLocation: state.map.userLocation,
    task: state.task.task
})

export default connect(mapStateToProps, {showModal, SetUserLocationCreator}) (MapContainer);