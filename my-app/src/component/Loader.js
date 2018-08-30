import React from 'react';
import { BeatLoader } from 'react-spinners';

export default class Loader extends React.Component {
    constructor(propos) {
        super(propos);
        this.state = {
            loading : true
        }
    }

    showLoaderOrNot = () => {
        this.setState ({loading : ! this.state.loading}) 
    }

    render() {
        return (
            <div>
                <BeatLoader
                    color = {'#123abc'}
                    loading = {this.state.loading}
                />
                <button onClick = {this.showLoaderOrNot}>Loader</button>
            </div>
        )
    }
}
