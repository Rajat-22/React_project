import React from 'react'
import About from './About';
import Error from './Error';
import Home from './Home';
import People from './People';
import NavBar from './NavBar';
import Person from './Person';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// we want to use our router in our web page so that we would require a router which can route our components to there
// respective links address we would also require some kind of switch to enable or disable our router
function ReactRouterDom() {
    return (
        <Router>
           <NavBar />
            <Switch>
            <Route exact path="/">
           <Home />
           </Route>
           <Route path="/about">
           <About />
           </Route>
           <Route path="/people">
           <People />
           </Route>
            <Route path="/person/:id" childer={<Person/>}></Route>


           <Route path="*">
           <Error />
           </Route>
           </Switch>
        </Router>
    )
}

export default ReactRouterDom
