import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from '../App';
import Detail from './Detail';
import './MyRouter.css';

export default class MyRouter extends Component {
    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to = {'/'}>Home</Link></li>
                        <li><Link to = {'/detail'}>detail</Link></li>
                    </ul>

                <Switch>
                    <Route exact path = '/' component = {App}></Route>
                    <Route exact path = '/detail' component = {Detail}></Route>
                </Switch>
                </div>
            </Router>
        )
    }
}