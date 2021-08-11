import React, {useState} from 'react'

function UseStateObject() {
    const[person,setPerson] = useState({
        name:"Rajat Sharma",
        age:24,
        message:"I am Legend",
    });

    const changeMsg=()=>{
        setPerson({...person, message:"Not Anymore"})  // using spreadoperator to make fist two name and age as it it
                                                 // and change the message of last one    
    }
    return (
        <div>
            <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={changeMsg}>Change Msg</button>
            </>
        </div>
    )
}

export default UseStateObject

