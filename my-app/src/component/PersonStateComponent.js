import React, { Component } from 'react';

export default class PersonStateComponent extends Component {
    constructor(propos){
        super(propos);
        this.state = {
            onWork : true
        }
    }

    changeState = () => {
        this.setState ({onWork: ! this.state.onWork})
    }

  render() {
        return(
            <div>
                <h1>{this.state.onWork && "onWork"}</h1>
                <h1>{!this.state.onWork && "offWork"}</h1>
                <button onClick = {this.changeState}>ChangeState</button>
            </div>
        )
    }
}