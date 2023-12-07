import React, { useEffect, useState } from "react";
import "./Weather.css"
import axios from "axios";

function GetLocationWeather(props) {
    if(props.status == 200){
        return <p>The weather in {props.data.name} is currently {props.data.main.temp} degrees fahrenheit</p> ;
    }
}

function Weather(){
    let [responseData, setResponseData] = React.useState('')
    const [city, setCity] = useState("")

    const handleKeyDown = (e) => {
        
        if(e.key == 'Enter'){
            e.preventDefault();
            fetchData(e)
        }
    }
    const fetchData = (e) => {
        e.preventDefault()
        const key = process.env.REACT_APP_API_KEY;
        //console.log(city)
        axios.get('https://api.openweathermap.org/data/2.5/weather?appid='+key+'&q='+city+'&units=imperial').then(response => {
            setResponseData(response)
            console.log(response)
        })
        .catch(error => {
            console.error(error);
        });
    }
    return (
        <div>
            <h1>Weather</h1>
            <form>
                <label id="city"><strong>Enter a city</strong></label>
                <br />
                <div className="text-form">
                    <input  type="text" name="City" onChange={(e) => setCity(e.target.value)} onKeyDown={ (e) => handleKeyDown(e)}/>
                    <br />
                    <div id="hover-btn">
                        <button  onClick={(e) => fetchData(e)} type="button">Submit</button>
                    </div>
                </div>
            </form>
            {GetLocationWeather(responseData)}
        </div>
    )
}

export default Weather