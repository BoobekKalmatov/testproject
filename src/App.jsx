import './App.css';
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
function App() {

  return (
    <div className="app">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Registration/>}/>
        </Routes>
    </div>
  );
}

export default App;
