import React, { Component } from "react";
import CountChild from "./countchild";

class CountParent extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {

    return (
      <div>
        {this.state.counters.map((counter) => (
          <CountChild
            key={counter.id}
            value={counter.value}
            id={counter.id}
          >
            {/* <h3>{counter.id}</h3> */}
          </CountChild>
        ))}
      </div>
    );
  }

  
}

export default CountParent;
