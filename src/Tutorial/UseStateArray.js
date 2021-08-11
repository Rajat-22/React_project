import React from 'react'
import { data } from "./data";

function UseStateArray() {
    const [people, setPeople] = React.useState(data) // another way to call UseState 
    return (
        <>
            {
            
            people.map((person) => {
                const {id, name} = person;
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4> 
                   </div>
                )
            }
        )}
        <button className="btn" onClick={() => setPeople([])}>Clear The Avenger</button>
        </>
    )
}


export default UseStateArray


