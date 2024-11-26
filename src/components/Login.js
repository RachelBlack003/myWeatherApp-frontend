import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

//login and weather currently have a similar code setup. They use states
//to swap between pages. The html needs to be updated to interact with the backend
//,though

function Login() {

  //establishes the use state
  const [toWeather, setToWeather] = useState(false)

  //changes page if the state is changed
  if(toWeather === true){
    console.log("Going to weather page")
    return<Navigate to={`/weather`} />;
  }

  //default html
  return (
    <body>
      <main>
        <form action="/weather" method="POST">
          <h1 className>Please log in</h1>
          Name: <input type="text" name="name"/><br/>
          Password: <input type="text" name="name"/><br/>
          <div>
            <button onClick={() => setToWeather(prev => !prev)}>Log in</button>
          </div>
        </form>
      </main>
    </body>
  )
}


export default Login