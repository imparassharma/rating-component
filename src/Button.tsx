import React from 'react';

interface Btn{
    text:String;
}

const Button:React.FC<Btn> = (props) =>{
    return(
        <div className="submitBtn">
            <button type='submit'>{props.text}</button>
        </div>
    )

}

export default Button;