import React, { Component } from 'react';

class WeatherBox extends Component {
    render() {
        return (
            <div>
                <label>{this.props.temp}</label> 
            </div>
        );
    }
}

export default WeatherBox;

//search for a city to get the weather