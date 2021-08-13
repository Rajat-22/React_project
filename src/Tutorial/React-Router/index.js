import React from 'react'
import About from './About';
import Error from './Error';
import Home from './Home';
import People from './People';
import NavBar from './NavBar';
import Person from './Person';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// we want to use our router in our web page so that we would require a router which can route our components to there
// respective links address we would also require some kind of switch to enable or disable our router
function ReactRouterDom() {
    return (
        <Router>   {/* open the router for creating various route */}
            <NavBar />  {/* create nav bar at the top before switch */}
            <Switch>    {/* create switch for switching between the pages */}
                <Route exact path="/">  {/* write exact fro giving the exact path and open the route for every component */}
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/people">
                    <People />
                </Route>
                <Route path="/person/:id" childer={<Person />}></Route>
                <Route path="*">  {/* give * instead of path because for unfound page it shows the error page */}
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
}

export default ReactRouterDom
