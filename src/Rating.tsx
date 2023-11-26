import React, { useState } from "react";

interface RatingProps {
    onRatingChange: (rating: number) => void;
}

function Rating({ onRatingChange }: RatingProps) {
      
    const [rate,setRate] = useState <number[]>([1,2,3,4,5]);

    const handleClick = (e:React.MouseEvent<HTMLElement>,id:number)=>{
        
        //resetting color of previous rating if made
        rate.forEach((_, index) => {
            const element = document.getElementById(`${index}`);
            if (element) {
              element.style.backgroundColor = "hsl(213, 19%, 18%)";
              element.style.color = "hsl(217, 12%, 63%)";
            }
        });

        const currentRating = document.getElementById(`${id}`);
        if(currentRating){
            currentRating.style.backgroundColor= 'hsl(216, 12%, 54%)';
            currentRating.style.color = 'white';
        }

        onRatingChange(id+1);

    }

    return(
        <div className="ratingComponent">
            {rate.map((rating,index)=>(
                <div id={`${index}`} className="ratingCircle" onClick={(e)=>handleClick(e,index)}>{rating}</div>
            ))}
        </div>
        
    )

}

export default Rating;