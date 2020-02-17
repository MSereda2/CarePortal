import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import {TaskInfo} from '../taskInfoWindow/TaskInfo'

class TaskMarker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showTooltip: false
        }
    }

    clickTooltip() {
        this.setState({showTooltip: !this.state.showTooltip})
    }

    closeWindow() {
        this.setState({showTooltip: false})
    }

    render(){
        const {showTooltip} = this.state;
        const {lat, lng, name, price, description} = this.props

        return(
            <Marker
              position={{lat: parseFloat(lat), lng: parseFloat(lng)}}
              onClick={this.clickTooltip.bind(this)}>
                  {showTooltip && (
                      <TaskInfo description={description}
                      name={name}
                      price={price}
                      closeWindow={this.closeWindow.bind(this)} />
                  )}
            </Marker>
        )
    }
}

export default TaskMarker;


