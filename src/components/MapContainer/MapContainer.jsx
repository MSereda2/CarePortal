import React from 'react';
import Map from './Map/Map';
import {connect} from 'react-redux';

// Actions
import {getUser} from '../../redux/reducers/map/map_actions';


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
            <Map task={this.props.task} userLocation={this.props.userLocation} />
        );
    }
}

const mapStateToProps = (state) => ({
    userLocation: state.map.userLocation,
    task: state.task.task
})

export default connect(mapStateToProps, {getUser}) (MapContainer);