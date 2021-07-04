import React, { Component } from 'react';
import Movies_func from "./Movie_func";
import Movielist from './Movielist';
import Login from "./Login"
import ArrowMovie from "./arrowMovie"
export default class Movie extends Component {
    render() {
        return (
            <div>
                <Movielist />
                <Movies_func />
                <Login />
                <ArrowMovie />
            </div>
        )
    }
}
