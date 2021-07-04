import React, { Component } from 'react'
import Movie from './contexts/Movie';
import Usercontext from './contexts/Usercontext';
import Cartcontext from "./contexts/cartContext";

export default class App extends Component {

  handleLogin = (username) => {
    const user = { name: "Nitin" }
    this.setState({ currentUser: user })
  }

  state = {
    currentUser: null
  }


  render() {
    return (
      <Cartcontext.Provider value={{cart : [] }}>
        <Usercontext.Provider value={{ currentUser: this.state.currentUser, onLogin: this.handleLogin }}>
          <div>
            <Movie />
          </div>
        </Usercontext.Provider>
      </Cartcontext.Provider>


    )
  }
}
