// Packages
import React from "react";
import Map from "./Map/Map";
import { connect } from "react-redux";
import style from "./mapContainer.module.css";

// Actions
import { showModal, closeModal } from "../../redux/reducers/tasks/task_actions";

// Thunk Creator
import { SetUserLocationCreator } from "../../redux/reducers/map/map_thunk";

// Selectors
import { getTaskSelect } from "../../redux/reducers/tasks/task_selectors";
import {
  getStreetName,
  getUserLocation,
} from "../../redux/reducers/map/map_selectors";

class MapContainer extends React.Component {
  componentDidMount = () => {
    this.props.SetUserLocationCreator(this.props.userLocation);
  };

  render() {
    return (
      <div className={style.map}>
        <Map {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  streetName: getStreetName(state),
  userLocation: getUserLocation(state),
  task: getTaskSelect(state),
});

export default connect(mapStateToProps, { showModal, SetUserLocationCreator })(
  MapContainer
);
