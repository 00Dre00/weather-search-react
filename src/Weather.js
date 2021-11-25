import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import Information from "./Information";
import Forecast from "./Forecast";


export default function Weather(props){
    const [weatherData, setWeatherData]=useState({ready:false});
    const [city, setCity]=useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData({
            ready:true,
            coordinates:response.data.coord,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            date:new Date(response.data.dt*1000),
            description:response.data.weather[0].description,
            icon:response.data.weather[0].icon,
            wind:response.data.wind.speed,
            city:response.data.name,
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }

    function search(){
        const apiKey="195371f14fc4f92fa2dc2f8afa438ba7";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if(weatherData.ready){
        return(
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Search for city" className="form-control search-input" autoFocus="on" onChange={handleCityChange}/>
                            </div>
                            <div className="col-3">
                                <input type="submit" value="Search" className="btn btn-primary"/>
                                </div>
                    </div>
                </form>
               <Information data={weatherData}/>
               <Forecast coordinates={weatherData.coordinates}/>
               
               <footer>
    This project was coded by Andrea Hitchin and is
    <a href="https://github.com/00Dre00/weather-search-react" target="_blank">
        open-sourced on GitHub
    </a>
</footer>

            </div>

        );
    }
    else{search(); return"Loading...";}
}