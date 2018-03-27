
import React from 'react';
import { compose, withProps, lifecycle } from "recompose";// Recompose is a utility library we can use in react to simplify our component with HOC
import { withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"; // Our google map component library wrapper
console.log("Testing the right page")

const MyMapComponent = compose(
  withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD7X5pSe1Yx8dy5rbuS7Nu8ZI1a3wCFcUg&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
  withGoogleMap,
  lifecycle({
    componentDidMount(){
      const DirectionsService = new window.google.maps.DirectionsService();

      DirectionsService.route({
        origin: new window.google.maps.LatLng(37.802162, -122.273962),
        destination: new window.google.maps.LatLng(37.802162, -122.273962),
        travelMode: window.google.maps.TravelMode.DRIVING,
      }), (result, status) => {
        if(status === window.google.maps.DirectionsStatus.OK){
          this.setState({
            directions: result,
          })
          console.log(this.state);;
        } else {
          console.error(`error fetching directions ${result}`)
        }
      };
    }
  })
)( props =>
<GoogleMap
  defaultZoom={17}
  defaultCenter={new window.google.maps.LatLng(37.802162, -122.273962)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} panel={ document.getElementById('panel') } />}
    <div id="panel"></div>
    </GoogleMap>
);

class RenderMapComponent extends React.PureComponent {
  render() {
    return (
      <MyMapComponent />
    )
  }
}

export default RenderMapComponent;
