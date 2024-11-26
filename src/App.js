import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Weather from './components/Weather';


//app.js is just used to set up the routes. The other js files which set up the pages
//use navigate to navigate the website.

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Weather/>} />
          <Route path="/weather" element={<Weather/>} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;