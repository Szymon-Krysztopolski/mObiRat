import React, { Component } from "react";
import LoadingScreen from "./LoadingScreen";
import "./Map.css";

class Map extends Component {

  state = {
    latitude: null,
    longitude: null,
    errorMessage: "",
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.handleSuccess,
        this.handleError
      );
    } else {
      this.setState({
        errorMessage: "Geolocation is not supported by your browser.",
      });
    }
  }

  handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    this.setState({ latitude, longitude });
  };

  handleError = (error) => {
    this.setState({ errorMessage: error.message });
  };

  render() {
    const { latitude, longitude, errorMessage } = this.state;

    return (
      <div className="App">
        <div id="rectangle">

          <img className="arrow-back" src="normal_u20_1.svg" alt="arrow-back" />
          <div className="header">
            <div className="title">mDawca</div>
          </div>
          {errorMessage ? (
            <p>Error: {errorMessage}</p>
          ) : (
            <div className="content">
              {latitude !== null && longitude !== null ? ( 
                // <p>
                //   Latitude: {latitude}, Longitude: {longitude}
                // </p>
                <div className="content">
                <iframe
                  src = {`https://www.google.com/maps/d/embed?mid=142nqMIgmK3tCarABCmdvq8MHGlNZZPMB&ehbc=2E312F&ll=${latitude},${longitude}&z=10`}
                  width = "100%"
                  height = "100%"
                  margin = "5px"
                  title = "Google Map"
                  allowFullScreen
                ></iframe>
              </div>
              ) : (
                <LoadingScreen />
              )}
            </div>
          )}

        </div>
      </div>
    );
  }
}

export default Map;
