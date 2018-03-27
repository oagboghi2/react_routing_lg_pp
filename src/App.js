import React, { Component } from 'react';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'
// import child component
import RenderMapComponent from './mapContainer2'
import MapDirections from './Mapdirections'

// MOST IMPORTANT: passthe Google Maps props down to the MapContainer component as 'google'.


class App extends Component {
  render() {
    return (
      <div>
        <h1> Google Maps API + React </h1>
        <RenderMapComponent />
        <MapDirections />
      </div>
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({ apiKey: 'AIzaSyBP8vBbjqIek0nxm8ZKLJhJq_Pu8gSzj3I', })(App)
