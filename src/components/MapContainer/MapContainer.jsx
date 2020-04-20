// Packages
import React from "react";
import Map from "./Map/Map";
import { connect } from "react-redux";
import style from "./mapContainer.module.css";

// Actions
import { showModal, closeModal } from "../../redux/reducers/tasks/task_actions";
import {getSerchRequest} from '../../redux/reducers/map/map_actions';

// Selectors
import { getTaskSelect } from "../../redux/reducers/tasks/task_selectors";
import {
  getStreetName,
  getUserLocation,
} from "../../redux/reducers/map/map_selectors";

class MapContainer extends React.Component {

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
  searchRuquest: state.map.searchRuquest
});

export default connect(mapStateToProps, { showModal, getSerchRequest })(
  MapContainer
);
