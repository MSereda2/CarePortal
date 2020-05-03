import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import style from './mapSearch.module.scss';


class MapSearch extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      autocomplete: null,
      onLoad: this.onLoad,
      onPlaceChanged: this.onPlaceChanged,
      defaultBounds: {
        east: 12,
        north: 15,
        south: 15,
        west: 20
      }
    }
  }


  onLoad = (autocomplete) => {
    this.setState({
      autocomplete: autocomplete
    })
  }

  onPlaceChanged = () => {
    if (this.state.autocomplete !== null) {
      let lat = this.state.autocomplete.getPlace().geometry.location.lat();
      let lng = this.state.autocomplete.getPlace().geometry.location.lng();
      console.log(this.state.autocomplete.getPlace())
      this.props.getSerchRequest({ lat, lng })
      this.state.autocomplete.getPlace()
    }
  }

  render() {
    return (
      <Autocomplete
        fields={['geometry.location']}
        onLoad={this.onLoad}
        onPlaceChanged={this.onPlaceChanged}
      >
        <div className={style.wrap}>
          <div className={style.search}>
            <input type="text" className={style.searchTerm} placeholder="What are you looking for?" />
            <button type="submit" className={style.searchButton}>
              <i className='fa fa-search'></i>
            </button>
          </div>
        </div>

      </Autocomplete>

    )
  }


}

export default MapSearch;
