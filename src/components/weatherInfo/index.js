import React, { Component } from 'react';
import './index.css';

class WeatherInfo extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
            {
              this.props.data.name &&
              <div className="WeatherInfo">
                <h3>City: {this.props.data.name}</h3>
                <h3>Country: {this.props.data.sys.country}</h3>
                <h3>Temerature: {this.props.data.main.temp.toFixed(0)}&deg;</h3>
                <h3>Humidity: {this.props.data.main.humidity}%</h3>
                <h3>Description: {this.props.data.weather[0].main} - {this.props.data.weather[0].description}</h3>
              </div>
            }
            {
              this.props.data.cod === '404' &&
                <h3 className="error">ERROR</h3>
            }
        </div> {/* ends col 12 */}
      </div> // ends row
    );
  }
}

export default WeatherInfo;
