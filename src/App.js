//import React, { Component } from 'react'
// import logo from './logo.svg';
import React from 'react'
import { useState } from 'react';
import './App.css';

import Header from './component/Header'
import './style/LeftRightSide.scss';

import LeftNavigation from './component/LeftNavigation'
import RightNavigation from './component/RightNavigation';


function App() {
  const[display,setDisplay]=useState(false);
      return(
          <div>
            <Header setDisplay={setDisplay}/>
           
            <div className='leftright-side'>
            <LeftNavigation display={display}/>
            <RightNavigation/>
            </div>
          </div>
        );
}

export default App;
