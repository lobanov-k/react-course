import React, { Component } from "react";
import styled from "styled-components";

import { User as UserEl } from "./UserEl";

import "./styles.css";

const User = styled(UserEl)`
  font-weight: bold;
`;

export class UserItem extends Component {
  constructor(props) {
    super(props);

    this.clickListener = () => {
      console.log("CLICK");
    };
  }

  componentDidMount() {
    console.log("I' mounted", "name", this.props.name);

    this.intervalId = setInterval(() => {
      console.log("tick");
    }, 1000);

    document.addEventListener("click", this.clickListener);
  }

  componentWillUnmount() {
    console.log("Goodbye", "name", this.props.name);

    document.removeEventListener("click", this.clickListener);
    clearInterval(this.intervalId);
  }

  componentDidUpdate(props, state) {
    console.log(props, state);

    console.log("I was updated");
  }

  render() {
    return (
      <div className={`User${this.props.isAdmin ? " bgWarning" : ""}`}>
        <div className="User__index">#{this.props.index}</div>
        <div className="User__name">Name: {this.props.name}</div>
        <div className="User__phone">Phone: {this.props.phone}</div>
        <label>
          Admin:
          <input
            type="checkbox"
            checked={this.props.isAdmin}
            onChange={() => this.props.onStatusChange(this.props.id)}
          />
        </label>
      </div>
    );
  }
}
