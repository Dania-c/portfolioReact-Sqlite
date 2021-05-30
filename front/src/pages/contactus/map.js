import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
const mapStyles = {
  width: '400px',
  height: '15cm'
};

export class MapContainer extends Component {
    
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 33.893791300000004,
            lng: 35.5017767
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDrtoymoyCAy7-kbKqiO4kuALU7HDBM13w'
})(MapContainer);






















































































// // import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import React, { Component } from 'react';
// import { GoogleComponent } from 'react-google-location'
// class MapContainer extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             place:null,
//         };
//     }
//   render() {
      
//     return (
//         <div >
      
//      </div>
//         )
//   }
// }
 
// export default MapContainer

 




// // // import React, { Component } from 'react';

// // // class map extends Component{
// // //     constructor(props){
// // //         super(props);
// // //         this.state={
// // //             latitude:null,
// // //             longitude:null,
// // //             userAddress:null
// // //         };
// // //         this.getLocation=this.getLocation.bind(this);
// // //         this.getCoordinates=this.getCoordinates.bind(this);
// // //     }
// // //     getLocation() {
// // //         if (navigator.geolocation) {
// // //           navigator.geolocation.getCurrentPosition(this.getCoordinates,this.handleLocationError);
// // //         } else {
// // //         alert("Geolocation is not supported by this browser.");
// // //         }
// // //       }
// // //       getCoordinates(position){
// // //     this.setState({
// // //         latitude:position.coords.latitude,
// // //         longitude:position.coords.longitude
// // //     })
// // //       }
// // //        handleLocationError(error){
// // //         switch(error.code) {
// // //           case error.PERMISSION_DENIED:
// // //             alert("User denied the request for Geolocation.")
// // //             break;
// // //           case error.POSITION_UNAVAILABLE:
// // //             alert("Location information is unavailable.")
// // //             break;
// // //           case error.TIMEOUT:
// // //             alert("The request to get user location timed out.")
// // //             break;
// // //           case error.UNKNOWN_ERROR:
// // //             alert("An unknown error occurred.")
// // //             break;
// // //             default:
// // //                 alert("An unknown error occurred.")
// // //         }
// // //       } 
// // //     render(){
// // //         return(
// // //             <div className='map'>
// // //                 <h2>React Geolocation Example</h2>
// // //                 <button onClick={this.getLocation}>Get coordinates</button>
// // //                 <h4>HTML5 coordinates</h4>
// // //                 <p>Latitude:{this.state.latitude}</p>
// // //                 <p>Longitude:{this.state.longitude}</p>
// // //                 <h4>Google Map Geocoding</h4>
// // //                 <p>Address:{this.state.userAddress} </p>
// // //                 {                
// // //                 this.state.latitude && this.state.longitude ?
// // //                     // <img src={'https://maps.googleapis.com/maps/api/staticmap?center= ${this.state.latitude},${this.state.longitude}"&zoom=14&size=400x300&sensor=falsemarkers=color:red%7c${this.state.latitude},${this.state.longitude}&key=(AIzaSyDILcteAgAsNi2JCl2dI0bPTk-FGvD8gKY)'} alt=''></img>
// // //                     <img src={'https://maps.googleapis.com/maps/api/staticmap?center=&zoom=14&size=400x300&sensor=false&key=${AIzaSyDILcteAgAsNi2JCl2dI0bPTk-FGvD8gKY}'}></img>
// // //                     :
// // //                     null
// // //     }
// // //             </div>
// // //         )
// // //     }
// // // }
// // // export default map;