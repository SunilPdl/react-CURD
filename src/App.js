import React from 'react';
import AddUsers from './add-users/AddUsers';
import AllUsers from './all-users/AllUsers';
import Navbar from './navbar/Navbar';

import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import UserNotFound from './all-users/UserNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/'> <AllUsers /> </Route>
          <Route exact path="/add"> <AddUsers /> </Route>
          <Route> <UserNotFound /> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
