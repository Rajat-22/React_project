import React,{useState} from 'react'

function UseStateErrorEx() {
    let title="Random Title";  //its initial value is random title
    const handleClick = ()=>{
        console.log(title);
    }
    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={handleClick}>
                change title
            </button>
        </React.Fragment>
    );
};

export default UseStateErrorEx
