import React, {useState} from 'react'

function UseStateObject() {
    const[person,setPerson] = useState({
        name:"Rajat Sharma",
        age:24,
        message:"I am Legend",
    });
    const [name,setName] = useState("Tony Stark")
    const [age,setAge] = useState(45)
    const [message,setMessage] = useState("Ironman")

    const changeMessage=()=>{
        setPerson({...person, message:"Not Anymore"})  // using spreadoperator to make fist two name and age as it is
                                                 // and change the message of last one    
        setMessage("Hello!!!");
                                                }
    return (
        <div>
            <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={changeMessage}>Change Message</button>
            </>
        </div>
    )
}

export default UseStateObject

