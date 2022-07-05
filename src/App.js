import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// import MenuBtn from './Components/MenuBtn.js/MenuBtn';
// import Bio from './Components/Bio/Bio';
// import Updates from './Components/Updates/Updates';
// import Exhibits from './Components/Exhibits/Exhibits';
// import Net from './Components/Net/Net';
// import Reviews from './Components/Reviews/Reviews';
// import Contact from './Components/Contact/Contact';

import Home from './Components/Home/Home';
import "./App.css";


const App = () => {
  return (
    <Router>
        {/* <MenuBtn>
          <Switch>
            <Route path="/bio" component={Bio} exact>
              <Bio/>
            </Route>
            <Route path="/updates" component={Updates} exact>
              <Updates/>
            </Route>
            <Route path="/exhibits" component={Exhibits} exact>
              <Exhibits/>
            </Route>
            <Route path="/net" component={Net} exact>
              <Net/>
            </Route>
            <Route path="/reviews" component={Reviews} exact>
              <Reviews/>
            </Route>
            <Route path="/contact" component={Contact} exact>
              <Contact/>
            </Route>
          </Switch>   
        </MenuBtn> */}
        
        <Home/>
    </Router>
  );
}

export default App;
