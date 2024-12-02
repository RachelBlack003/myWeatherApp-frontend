import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Weather() {

    //TODO: Implement fetching weather from /api/weather endpoint
    return (
    <div>
        <h1>Weather forecast will go here.</h1>
    </div>
  )
}


export default Weather
import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

//login and weather currently have a similar code setup. They use states
//to swap between pages. The html needs to be updated to interact with the backend
//,though

function Login() {
    
    //establishes the use state
    const [toLogin, setToLogin] = useState(false)
    //changes page when the state is changed
    if(toLogin === true){
        return<Navigate to={`/`} />;
    }

    //default html
    return (
    <body>
        <main>
            <form action="/" method="POST">
                <div>
                    <h1>Please input your zip code</h1>
                    Zipcode <input type="numbeer" name="name"/><br/>
                    <button onClick={() => setToLogin(prev => !prev)}>Log out</button>
                </div>
                <div id="weatherbox">

                </div>
            </form>
        </main>
    </body>
  )
}


export default Login