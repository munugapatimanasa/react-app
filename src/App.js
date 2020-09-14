import React, {useState,useEffect} from 'react';
import Navbar from './components/navbar';


import {BrowserRouter as Router,Switch,Route } from
  'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import axios from 'axios';

import {createGlobalStyle} from 'styled-components';
import infiniteScroll from 'react-infinite-scroll-component';

//style
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;


function App() {

  
  
  return (
   <>
   <Router>
     <Navbar/>
       <Switch>
         <Route path="/" exact component={Home}/>
       </Switch>
       
     
   </Router>
   </>
   
  );
}


export default App;

