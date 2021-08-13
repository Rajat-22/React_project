import React from 'react'
import { Link } from "react-router-dom";

function Error() {
    return (
        <div>
            <h2>404 Error</h2>
            <Link to="/" className='btn'>Go To Home Page</Link>
            {/* creating the button for home page in error page to return on the homepage and use link tag  */}
        </div>
    )
}

export default Error
