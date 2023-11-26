import React from 'react';
import { useState } from 'react';
import Rating from "./Rating";
import './App.css';
import img1 from './images/icon-star.svg';


function App(){
    
   
    return(
       
      <div className="mainSection">
        <div className="main">
            <div className="logo ratingCircle" id='logo'><img src={img1} /></div>
            <h1 id='heading-text'>How did we do?</h1>
            <p id='inner-text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <Rating/>
        </div>
        <div className="warningContainer hidden" id='warning'>
          <p>Please choose a rating!</p>
        </div>
      </div>
    )

}

export default App;