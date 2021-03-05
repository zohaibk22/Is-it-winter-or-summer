import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import logo from "./logo.svg";

import "./App.css";
import "./Components/SeasonDisplay/SeasonDisplay";

import SeasonDisplay from "./Components/SeasonDisplay/SeasonDisplay";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE...NO WHERE ELSE EVER
  //   this.state = { lat: null, errorMessage: "" };
  // }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setState to update state
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (error) => {
        this.setState({
          errorMessage: error.message,
        });
      }
    );
  }

  // componentDidUpdate() {
  //   console.log("My component was just updated- it rerendered");
  // }

  render() {
    if (this.state.lat) {
      return (
        <>
          {/* <div className="App">Latitude: {this.state.lat} </div> */}
          <SeasonDisplay latitude={this.state.lat} />
        </>
      );
    } else if (this.state.errorMessage) {
      return (
        <>
          <div className="App">Error: {this.state.errorMessage} </div>
        </>
      );
    } else {
      return (
        <>
          <div className="App">Loading </div>
        </>
      );
    }
  }
}
export default App;
