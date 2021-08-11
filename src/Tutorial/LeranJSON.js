import React from 'react'
import axios from 'axios'

function LeranJSON() {
    const handleClick = (b) =>{
        const promise = axios.post(" http://localhost:4000/users",{
            name:'Rajat'
        },{
            headers:{
                ['content']
            }
        })
    }
    return (
        <>
          <button type ="button" className='btn' onClick={handleClick}>Send User</button>
          <button type ="button" className='btn' onClick={getUsers}>Get User</button>  
        </>
    )
}

export default LeranJSON
