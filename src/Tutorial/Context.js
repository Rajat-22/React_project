import React, { useState, useContext } from 'react'
import { data } from "./data"

// it will fix the issue which we face in propdrilling
// the problem is we have to pass the component to ever step
// there are two solutions
// 1 context Api - for smaller applications
// 2 redux - for bigger applications

const PersonContext = React.createContext();
// it will return us two component and they are provider(1st) and consumer(2nd)

function ContextAPI() {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id)
        })
    }
    return (
        <>
            <PersonContext.Provider value={{ removePerson }}>
                <h3>Context API</h3>
                <List people={people}></List>
            </PersonContext.Provider>
        </>
    )
}
const List = ({ people }) => {
    return <>
        {
            people.map((person) => {
                return <SinglePerson key={person.id}{...person} />;
            })
        }
    </>
}
const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(PersonContext);
    return <div className="item">
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>remove</button>
    </div>
}

export default ContextAPI