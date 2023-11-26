import React, { useState } from "react";


const Rating:React.FC=() =>{
      
    const [rate,setRate] = useState <number[]>([1,2,3,4,5]);
    const [userRating, setUserRating] = useState<number>(0);

    const handleClick = (e:React.MouseEvent<HTMLElement>,id:number)=>{
        
        setUserRating(id);
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
            const ratingComponent = document.getElementById('rating-component');
            ratingComponent?.classList.add('hidden');
            const submitbtn = document.getElementById('submit-btn');
            submitbtn?.classList.add("hidden");
            const headtext = document.getElementById('heading-text');
            if(headtext)
            headtext.innerHTML = "Thank You!";
            const innertext = document.getElementById('inner-text');
            if(innertext)
            innertext.innerHTML = 'We appriciate you taking the time to give a rating.If you ever need more support, don\'t hesitate to get in touch! '
            const logo = document.getElementById('logo');
            logo?.classList.add('hidden');
            warning?.classList.add('hidden');
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