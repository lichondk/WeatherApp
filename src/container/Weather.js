import React, { Component } from 'react';
import axios from 'axios';
import config from '../config';
import Chartv2 from '../componets/Chart2v'

class WeatherCon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            flag: false
        }
    }

    componentDidMount() {
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=Aalborg,dk&mode=json&units=metric&appid=${config.weatherApiKey}`
        axios.get(url)
            .then(res => {
                const temp = res.data.list
                this.setState({
                    weather: temp,
                    flag: true
                })
            })
    }

    getDatats = () => {
        return (this.state.weather.map(weather => weather.dt_txt.substr(0,weather.dt_txt.indexOf(' '))))
    }

    getTemp = () => {
        return (this.state.weather.map(weather => weather.main.temp))
    }


    render() {
        return (
            <div>
                <Chartv2 weatherData={this.state.weather} getLabels={this.getDatats()} getData={this.getTemp()}/>
            </div>
        );
    }
}

export default WeatherCon;