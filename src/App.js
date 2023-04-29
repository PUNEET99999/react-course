// npm cache clean --force//--> use this, when you want to clean your chache
import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from  './Components/News';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';

export default class App extends Component {
 pageSize=15;
 state={
  progress:0
 }
 setProgress = (progress)=>{
  this.setState({progress:progress})
 }
  render() {
    return(
      <div>
        
      {/* <BrowserRouter> */}
            <Navbar/>
            <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />

            < News  setProgress={this.setProgress} country="in"  category="Business" pageSize={this.pageSize}/>
      {/* <Routes>
        <Route path="/">< News pageSize={10} country="in" category="general"/></Route>
        <Route  path="/Entertainment"><News key="entertainment" pageSize={10} country="in" category="Entertainment"/></Route>
        <Route  path="/Business">< News key="Business" pageSize={10} country="in" category="Business"/></Route>
        <Route  path="/Health"> <News key="health" pageSize={10} country="in" category="Health"/></Route>
        <Route  path="/Sport">< News key="sport" pageSize={10} country="in" category="Sport"/></Route>
        <Route  path="/Technology"> <News key="technology" pageSize={10} country="in" category="Technology"/></Route>
        <Route  path="/Science"> <news key="science" pageSize={10} country="in" category="Science"/></Route>

       </Routes>
    </BrowserRouter> */}
    </div>
  )
}
}