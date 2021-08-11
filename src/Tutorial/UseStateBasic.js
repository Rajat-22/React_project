import React,{useState} from "react"
// usestate is a named import so we must have it in the curly braces

// some basic rules of all hooks basically any import/function that starts with use
// components name must be in upper case
// must be in the function/component body
// cannot call it conditionally i.e. in if else or something like it

function UseStateBasic() {
    const [day, setDay] = useState("Today is Wed :(");
    const handleClick = () =>{
        if(day === "Today is Wed :("){      //use if else statement for loop in button
            setDay("and Tommorrow is Thu")
        }
        else{
        setDay("Today is Wed :(")}
    };

    return (
        <div>
            <>
            <h1>{day}</h1>
            <button type="button" className="btn" onClick={handleClick}>
                Change Day
            </button>
            </>
        </div>
    )
}


export default UseStateBasic

