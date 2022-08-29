import React from 'react';
import './App.css';
import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Interest from './pages/Interest';
import Awards from './pages/Awards';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/interest' element={<Interest/>} />
          <Route path='/awards' element={<Awards/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
