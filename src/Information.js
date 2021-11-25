import React from "react";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
import "./Information.css";

export default function Information (props){
    return(
        <div className="Information">
            <div className="row">
                <div className="col-6">
                    <h1>{props.data.city}</h1>
                    <ul>
                        <li>
                            <Date date={props.data.date}/>,{props.data.description}
                        </li>
                        <li>
                            Humidity:{props.date.humidity}%, Wind:{""}
                            {props.data.wind}km/h
                        </li>
                    </ul>
                </div>
                <div className="col-6">
                    <div className="temperature-container d-flex justify-content-end">
                        <WeatherIcon code={props.data.icon} />

                        <div>
                            <span className="temperature">
                                {Math.round(props.data.temperature)}
                            </span>
                            <span className="unit">&#176;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}