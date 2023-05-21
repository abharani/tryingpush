import React from 'react';
import './App.css';
import BasicExample from './Component/NavBar';
import {Route,Routes} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Skills from './Component/Skills';
import Portfolio from './Component/Portfol';
import Calculator from './Component/Calculator';


function App() {
  return (
    <div className="App"><BasicExample sticky="top" fixed="top" />
      
     <Routes><Route path='/About' element={<About />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Skills' element={<Skills />} />
              {/* <Route path='/Portfolio' element={<Portfolio />} /> */}
              <Route path='/Calculator' element={<Calculator />} /></Routes>
    </div>
  );
}

export default App;
