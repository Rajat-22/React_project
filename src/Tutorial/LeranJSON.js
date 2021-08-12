import React from 'react'
import axios from 'axios'

function LeranJSON() {
    const handleClick = (b) => {
        const promise = axios.post("http://localhost:4000/users", {
            name: "Tony"
        }, {
            header: {
                ['content-type']: 'application/json'
            }
        
    })
    promise.then(response => {
        console.log(response) // this is used to show response from the user
    })
    promise.catch(error => {
        console.error(error);
    })
    let c = b;
    console.log(b);
    }
    return (
        <>
            <button type="button" className='btn' onClick={handleClick}>Post User</button>
           {/* <button type="button" className='btn' onClick={getUsers}>Get User</button>  */}
        </>
    )
}

export default LeranJSON
