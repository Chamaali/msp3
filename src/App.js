import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
        <Navbar></Navbar>
    </Router>
  );
}

export default App;