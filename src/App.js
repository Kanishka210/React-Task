//import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import LeftNav from './component/LeftNav'
import RightNav from './component/RightNav'

// import userinfo from './component/HeadingList'

function App() {
      return(
          <div>
            <Header/>
            <div>
            <LeftNav/>
            <RightNav/>
            </div>
          </div>
        );
}

export default App;
