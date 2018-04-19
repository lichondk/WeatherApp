import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

class Chart extends Component {

    getAverage = (data) => {
        if(data !== undefined){
            return _.round(_.sum(data)/data.length)
        }
    }

    render() {
        return (
            <div>
                  <Sparklines data={this.props.data} Width={180} height={120}>
                    <SparklinesLine color="blue" on/>
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
                <label>{this.getAverage(this.props.data)}</label>
            </div>
        );
    }
}

export default Chart;