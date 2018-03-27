import React, { Component } from 'react'
var API_KEY = 'AIzaSyD7X5pSe1Yx8dy5rbuS7Nu8ZI1a3wCFcUg'

class MapDirections extends Component{
  constructor(props){
    super(props)

    this.state = {
                origin:"",
                destination:"",
                lat: "",
                lng: ""
              };

  this.handleOriginChange = this.handleOriginChange.bind(this);
  this.handleDestinationChange = this.handleDestinationChange.bind(this);
  this.fetchDirections = this.fetchDirections.bind(this);
  }

  fetchDirections(event){
    fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.origin}&destination=${this.state.destination}&key=${API_KEY}`)
      .then(response => {
        if(response.ok){
          console.log("testing" + response);
          return response.json();
        }else{
          return Promise.reject("Something went wrong");
        }
      })
      .then(directionsData => {
        this.setState({lat:directionsData.routesbounds.northeast.lat,lng:directionsData.routesbounds.northeast.lng})
        })
      .catch(error => this.setState({error}));
  }

  handleOriginChange(event){
    console.log(event.target.value);
    this.setState({origin: event.target.value});
  }

  handleDestinationChange(event){
    console.log(event.target.value);
    this.setState({destination: event.target.value});
  }
  render(){
    return(
      <div>
        <form action="" className="form" onSubmit={this.preventDefault}>
            Origin:<br/>
              <input type="text" name="origin" value={this.state.origin} onChange={this.handleOriginChange} />
              <br/>
            Destination:<br/>
              <input type="text" name="destination" value={this.state.destination} onChange={this.handleDestinationChange} />
              <input type="submit" value="Submit"  onSubmit={this.fetchDirections}/>
          </form>
        </div>
    );
  }

  preventDefault(event){
    event.preventDefault();
    console.log("testing");
  }
}

export default MapDirections;
