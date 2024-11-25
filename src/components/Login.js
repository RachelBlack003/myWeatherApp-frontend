import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const [toShoppingList, setToShoppingList] = useState(false)
  const [name, setName] = useState('');

  if(toShoppingList === true){
    console.log(name)
    return<Navigate to={`/list`} />;
  }
  
  return (
    <body className={styles.body}>
      <main className={styles.main}>
        <form action="/list" method="POST" className={styles.form}>
        <h1 className={styles.heading}>Please log in with your name</h1>
        Name: <input type="text" name="name"  onChange={(e) => setName(e.target.value)}/><br/>
        <div className={styles.button}>
          <button onClick={() => setToShoppingList(prev => !prev)}>Log in</button>
        </div>
        </form>
    </main>
  </body>
  )
}


export default Login