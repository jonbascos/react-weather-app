import React from 'react'

import '../App.css'

function Weather (props) {
    return(
        <div className="weatherInfo">
            <h2>{props.city}, {props.country}</h2>
            <p>Current Temperature: 
                <br />
                {props.temp}&deg; F</p>
            <p>
            Min: {props.min_temp}&deg; F || Max: {props.max_temp}&deg; F
            </p>
            <br />
            <h2>{props.conditions}</h2>
        </div>
    )
}

export default Weather