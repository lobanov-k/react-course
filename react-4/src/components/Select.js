import React, { Component } from "react";
import PropTypes from "prop-types";

export class Select extends Component {
  render() {
    return (
      <label>
        {this.props.label}
        <select onChange={this.props.onChange}>
          {this.props.options.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
