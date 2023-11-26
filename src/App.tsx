import React from 'react';
import { useState } from 'react';
import Rating from "./Rating";
import Button from './Button';
import './App.css';
import img1 from './images/icon-star.svg';


function App(){
    
    const [userRating, setUserRating] = useState<number | undefined>();
    const handleRatingChange = (rating: number) => {
      setUserRating(rating);
      console.log(rating);
    };
    
    return(
       
       <div className="main">
            <div className="logo ratingCircle"><img src={img1} /></div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <Rating onRatingChange={handleRatingChange}/>
            <Button text="SUBMIT"/>
        </div>
    )

}

export default App;