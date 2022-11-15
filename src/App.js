import React from 'react';
import Home from './component/Home';
import Contact from './component/Contact';
import Service from './component/Service';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import{ useSelector } from 'react-redux'

function App() {
  const msg = useSelector(state=>state.msg);
  return (
    <BrowserRouter>
    <div>{msg}</div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;