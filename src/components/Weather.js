import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styles from './WeatherStyling.module.css'
import Header from "./Header.js";

function Weather() {

    //TODO: Implement fetching weather from /api/weather endpoint
    return (
    
    <div className={styles.main}>
        <div className={styles.zipbox}>
        <Header/>
            <h1>ZipCode input will go here</h1>
            Zip code: <input type="number" name="zipcode"/><br/>
        </div>
        <div className={styles.weatherbox}>
            <h1>Weather forecast will go here.</h1>
        </div>
    </div>
  )
}


export default Weather