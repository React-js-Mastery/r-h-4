import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contect from './components/Contect';
import Student from './components/Student';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='routers'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Student' element={<Student />} />
          <Route path='/Contect' element={<Contect />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
