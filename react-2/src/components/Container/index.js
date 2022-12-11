import React, { Component } from "react";

import { Header } from "../Header";

import "./styles.css";

export class Container extends Component {
  componentDidMount() {
    console.log("Loaded with theme", this.props.theme);
  }

  render() {
    return (
      <div
        className={`container${this.props.theme ? " " + this.props.theme : ""}`}
      >
        <Header />
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
