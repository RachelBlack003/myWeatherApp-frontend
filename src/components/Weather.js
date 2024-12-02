import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styles from './WeatherStyling.module.css'

function Weather() {

    //TODO: Implement fetching weather from /api/weather endpoint
    return (
    
    <div>
        <div className={styles.zipbox}>
            <h1>ZipCode input will go here</h1>
        </div>
        <div>
            <h1>Weather forecast will go here.</h1>
        </div>
    </div>
  )
}


export default Weather