import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor() {
    console.log("Fuck Fuck");
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  componentDidUpdate() {

  }
  componentWillUnmount() {

  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
