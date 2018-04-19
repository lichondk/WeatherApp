import React, { Component } from 'react';
import axios from 'axios';
import WeatherBox from '../componets/WeatherBox';
import Searchbar from '../componets/searchBar';
import Chart from '../componets/chart.js';
import config from '../config';

class WeatherCon extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather: {},
            flag: false
        }
    }

    componentDidMount(){
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=Aalborg,dk&mode=json&appid=${config.weatherApiKey}`
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
        var temp = []
        if(this.state.flag){
            this.state.weather.map((weather, index) => {
              return temp.push(weather.main.temp)
            })
         }
        return temp
    }

    render() {
        return (
            <div>
                <Searchbar/>  
                <WeatherBox temp="search for a city to get the weather"/>
                <Chart />
            </div>
        );
    }
}

export default WeatherCon;