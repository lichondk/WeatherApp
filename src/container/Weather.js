import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from '../componets/searchBar';
import Chart from '../componets/chart.js';
import config from '../config';

class WeatherCon extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather: [],
            flag: false
        }
    }

    componentDidMount(){
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=Aalborg,dk&mode=json&units=metric&appid=${config.weatherApiKey}`
        axios.get(url)
            .then(res=> {
               const temp = res.data.list
                this.setState({
                    weather: temp,
                    flag: true
                })
        })   
    }

    getTemp = () => {
        if(this.state.flag){
           return this.state.weather.map(weather => weather.main.temp)
         }
    }

    render() {
        return (
            <div>
                <Searchbar/>
                 
                <Chart data={this.getTemp()} />
            </div>
        );
    }
}

export default WeatherCon;