import React, { useState } from "react";

interface RatingChange{
    onRatingChange:(rating:number)=>void;
}

const Rating:React.FC<RatingChange>=({onRatingChange}) =>{
      
    const [rate,setRate] = useState <number[]>([1,2,3,4,5]);
    const [userRating, setUserRating] = useState<number>(0);

    const handleClick = (e:React.MouseEvent<HTMLElement>,id:number)=>{
        
        setUserRating(id);
        onRatingChange(id);
        //hiding the warning message
        const warning = document.getElementById('warning');
        warning?.classList.add('hidden');
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

    }
    
    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>)=>{
        if(userRating>0 && userRating<5)
        {
            const warning = document.getElementById('warning');
            warning?.classList.add('hidden');
            const afterSubmit = document.getElementById('after-submit');
            const beforSubmit = document.getElementById('before-submit');

            beforSubmit?.classList.add('hidden');
            afterSubmit?.classList.remove('hidden');

        }
        else{
            const warning = document.getElementById('warning');
            warning?.classList.remove('hidden');
        }
    }


    return(
        <div className="ratingSection">
            <div className="ratingComponent" id="rating-component">
                {rate.map((rating,index)=>(
                    <div id={`${index}`} className="ratingCircle" onClick={(e)=>handleClick(e,index)}>{rating}</div>
                ))}
            </div>
            <div className="submitBtn" id='submit-btn'>
                <button  onClick={handleSubmit}>SUBMIT</button>
            </div>
        </div>
        
    )

}

export default Rating;