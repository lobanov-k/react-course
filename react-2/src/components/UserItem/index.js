import React, { Component } from "react";

import "./styles.css";

export class UserItem extends Component {
  render() {
    return (
      <div className="User">
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
