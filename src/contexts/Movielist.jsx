import React, { Component } from "react";
import Usercontext from "./Usercontext";
export default class Movielist extends Component {
  // static contextType = Usercontext;

  render() {
    // console.log(this.context.currentUser)
    return (
      <Usercontext.Consumer>
          { value => <div>Movie Class {value.currentUser ? value.currentUser.name : ''}</div> }
      </Usercontext.Consumer>
    );
  }
}
