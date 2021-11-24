import React, {useState,useEffect} from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props){
    const[loaded,setLoaded]=useState(false);
    const[forecast,setForecast]=useState(null);

    useEffect(()=>{
        setLoaded(false);},
        [props.coordinates]);
    

        function handleForecastResponse(response){
            setForecast(response.data.daily);
            setLoaded(true);
        }

        if (loaded){
            return(
                <div className="Forecast row">
                    {forecast.map(function(day,index){
                        if(index<5){
                            return(
                                <div className="col" key={index}>
                                    <forecastPreview data={day}/>
                                    </div>);}

                                    else{
                                        return null;}})}
                                        </div>);}

                                        else{
                                            let apiKey="195371f14fc4f92fa2dc2f8afa438ba7";
                                            let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;

                                            axios.get(url).then(handleForecastResponse);

                                            return null;}
                                        }