import React,{useState} from "react"
// usestate is a named import so we must have it in the curly braces

function UseStateBasic() {
    const [day, setDay] = useState("Today is Wed :(");
    const handleClick = () =>{
        if(day === "Today is Wed :("){
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

