import React, { useEffect, useState } from "react";
import axios from "axios";



function Weather(){
    let [responseData, setResponseData] = React.useState('')
    const fetchData = (e) => {
        e.preventDefault()
        const key = process.env.REACT_APP_API_KEY;
        axios.get('https://api.openweathermap.org/data/2.5/weather?appid='+key+'&q=Sacramento&units=imperial').then(response => {
            setResponseData(response.data)
            console.log(response)
        })
        .catch(error => {
            console.error(error);
        });
    }
    return (
        <div>
            <h1>Weather</h1>
            <input type="text" name="City" />
            <button onClick={(e) => fetchData(e)} type="button">Submit</button>
            {/* <p>The weather in {responseData.name} is at {responseData.main.temp} degrees fahrenheit</p> */}
            <p>The weather in {responseData.name} is at degrees fahrenheit</p>
        </div>
    )
}

export default Weather