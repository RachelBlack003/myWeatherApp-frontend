import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Weather() {

    //TODO: Implement fetching weather from /api/weather endpoint
    return (
    <body>
        <main>
            <form action="/" method="POST">
                <h1 className>Please log in</h1>
                Name: <input type="text" name="name"/><br/>
                Password: <input type="text" name="name"/><br/>
                <div>
                <button onClick={() => setToLogin(prev => !prev)}>Log out</button>
                </div>
            </form>
        </main>
    </body>
  )
}


export default Weather