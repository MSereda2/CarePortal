import React from 'react';
import Map from './Map/Map';
import {connect} from 'react-redux';
import style from './mapContainer.module.css';

// Actions
import {getUser} from '../../redux/reducers/map/map_actions';
import {showModal, closeModal} from '../../redux/reducers/tasks/task_actions';


class MapContainer extends React.Component {

    getLocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates)
        } else {
            alert(`Geolocation isn't supported in your browser`)
        }
    }

    getCoordinates = (position) => {
        this.props.getUser(position.coords.latitude, position.coords.longitude)
    }

    componentDidMount = () => {
        this.getLocation()
    }

    render() {
        return (
            <div className={style.map}>
                  <Map showModal={this.props.showModal} task={this.props.task} userLocation={this.props.userLocation} />
            </div>
          
        );
    }
}

const mapStateToProps = (state) => ({
    userLocation: state.map.userLocation,
    task: state.task.task
})

export default connect(mapStateToProps, {getUser,showModal}) (MapContainer);