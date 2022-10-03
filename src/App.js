import {BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import './App.css';
import React from 'react';

import Home from './pages/Home'
import styled from 'styled-components'
import LoginForm from './pages/LoginForm';
const AppConatiner = styled.div``
 
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} ></Route>
        

<Route path='/' element={<LoginForm/>}></Route>

      </Routes>

    </BrowserRouter>


  )
}

export default App;
