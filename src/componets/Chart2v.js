import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'

class Chartv2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            flag: false,
            data: null

        }
    }


    fillData = () => {
        var tempData = {
            labels: this.props.getLabels,
            datasets: [{
                label: "Aalborg",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: this.props.getData,
            }]
        }
        return (<Line data={tempData} weatherData={this.props.weatherData} />)
    }

    render() {
        return (
            <div>{this.fillData()}
            </div>
        );
    }
}

export default Chartv2;