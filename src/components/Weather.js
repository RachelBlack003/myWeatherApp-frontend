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


export default Login