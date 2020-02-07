import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //     // THIS IS THE ONLY TIME we do direct assignemtn to this.state
    //     this.state = { lat: null };

    //     window.navigator.geolocation.getCurrentPosition(
    //         position => {
    //             // Calling setState
    //             this.setState({ lat: position.coords.latitude });
    //         },
    //         err => console.log(err)
    //     );
    // }

    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner />;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
