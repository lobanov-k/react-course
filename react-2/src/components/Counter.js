import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  onClickHander = () => {
    this.setState((prev) => ({
      counter: ++prev.counter,
    }));
  };

  render() {
    return (
      <div className="counter">
        <p>
          {this.state.counter ? (
            <span>It was clicked {this.state.counter}</span>
          ) : (
            "User hasn't clicked yet."
          )}
        </p>
        <button onClick={this.onClickHander}>Increase</button>
      </div>
    );
  }
}
