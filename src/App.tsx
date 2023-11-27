import React from 'react';
import { useState } from 'react';
import Rating from "./Rating";
import './App.css';
import img1 from './images/icon-star.svg';
import img2 from './images/illustration-thank-you.svg'


function App(){

    const [finalRating, setfinalRating] = useState<number>(0);      
    
    const handleRatingChange = (rating:number)=>{
        setfinalRating(rating);
    }
   
    return(
       
        <div className="mainSection">

          <div className="main">
            <div className="afterSubmit hidden" id='after-submit'>
              <img className='thankyouComponent' id='thankyou-graphic' src={img2}/>
              <div className="finalRatingComponent">
                <p>You selected {finalRating+1} out of 5</p>
              </div>
              <h1 id='heading-text'>Thank you!</h1>
              <p id='innerAfter-text'>We appriciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>

            <div className="beforeSubmit" id='before-submit'>
              <div className="logo ratingCircle" id='logo'><img src={img1} /></div>
              <h1 id='heading-text'>How did we do?</h1>
              <p id='innerBefore-text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
              <Rating onRatingChange={handleRatingChange}/>
            </div>
          </div>

          <div className="warningContainer hidden" id='warning'>
            <p>Please choose a rating!</p>
          </div>

        </div>
    )

}

export default App;