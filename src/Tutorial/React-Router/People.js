import React, { useState } from 'react'
import { data } from "../data";
import { Link } from "react-router-dom";

function People() {
    const [people,setPeople] = useState(data);
    return (
        <div>
          <h1>People Page</h1>
          {people.map((person) => {
              return(
                  <div key={person.id} className="item">
                      <h4>{person.name}</h4>
                      <Link to={`/person/${person.id}`}>Learn More</Link>
{/* link the id of the data file and create button learn more to show every person information on clicking the person id */}
                      </div>
              );
          })}  
        </div>
    )
}

export default People
