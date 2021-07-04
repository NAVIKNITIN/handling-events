import React, { Component } from "react";

class CountChild extends Component {
  state = {
    value:this.props.value,
  };


//   formatCount() {
//     const { value } = this.state;
//     return value === 0 ? "Zero" : value;
//   }


  HandleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
    console.log(this.props);
  };
  render() {
    return (
      <div>
        <span className="label p-4">{this.state.value}</span>

        <button
          type="button"
          className="btn btn-primary "
          onClick={this.HandleIncrement}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default CountChild;
