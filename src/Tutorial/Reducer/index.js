import React, { useState, useReducer } from 'react'
import Model from './Model';
import { data } from "../data";

function Index() {
    const [name, setName] = useState('');
    const [people, setPeople] = useState(data);
    const [showModel, setShowModel] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            setShowModel(true);
            setPeople([...people, { id: new Date().getTime().toString, name }])
            setName('')
        }
        else {
            setShowModel(true)
        }
    }

    return (
        <>
            {showModel && <Model />}
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <button type="submit">Add User</button>
            </form>
            {people.map((person) => {
                return <>
                    <div key={person.id}>
                        <h4>{person.name}</h4>
                    </div>
                </>
            })}
        </>
    )

}
export default Index
