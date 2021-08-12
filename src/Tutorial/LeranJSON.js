import React from 'react'
import axios from 'axios'

function LeranJSON() {
    const handleClick = (b) => {
        const promise = axios.post("http://localhost:4000/users", {
            name: "Tony"  // setting the object we want or create
        }, {
            header: {
                ['content-type']: 'application/json'  // this setting the server type
            }
        
    })
    promise.then(response => {
        console.log(response) // this is used to show response from the user
    })
    promise.catch(error => {
        console.error(error);  // this is used to console our error if we get
    })
    let c = b;
    console.log(b);
    }

    const getUsers = () =>{
        axios.get("http://localhost:4000/users").then(users => {
            console.log(users);
 {/*  we are getting the data from our json server and then storing it in users and then consoling the array of the object */}
        })
    }
    return (
        <>
        <h2> Title </h2>
            <button type="button" className='btn' onClick={handleClick}>Post User</button>
         <button type="button" className='btn' onClick={getUsers}>Get User</button> 
        </>
    )
}

export default LeranJSON
