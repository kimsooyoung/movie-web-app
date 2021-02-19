import React, { Component } from "react";
import PropTypes from "prop-types";

export default class App extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  state = {
    isLoading: true,
    count: 0,
  };

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState((current) => ({ isLoading: false }));
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const { isLoading } = this.state;
    {
      console.log("Render");
    }
    return <div> {isLoading ? "Loading" : "Done..."} </div>;
  }
}
