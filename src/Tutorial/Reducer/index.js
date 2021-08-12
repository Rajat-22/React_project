import React, { useState, useReducer } from 'react'
import Model from './Model';
import { data } from "../data";
import { reducer } from './Reducer';

const defaultState ={
    people:data,
    isModelOpen:false,
    modelContent:"",
}

function Index() {
    const [name, setName] = useState('');
  //  const [people, setPeople] = useState(data);
   // const [showModel, setShowModel] = useState(false);
   const [state, dispatch] = useReducer(reducer, defaultState)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = {id:new Date().getTime.toString(),name};
            dispatch({type:'ADD_ITEM', payload:newItem});
            setName("")
        }
        else {
            dispatchEvent({type:"NO_VALUE"});
        }
    }

    const closeModel =() => {
        dispatchEvent({type: 'CLOSE_MODEL'});
    }

    return (
        <>
            {state.isModelOpen && (<Model closeModel ={closeModel} modelContent={state.modelContent} />)}
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <button type="submit">Add User</button>
            </form>
            {state.people.map((person) => {
                return <>
                    <div key={person.id} className='item'>
                        <h4>{person.name}</h4>
                        <button onClick ={() =>
                        dispatch({type:"REMOVE_ITEM", payload: person.id})}>Remove</button>
                    </div>
                </>
            })}
        </>
    )

}
export default Index
