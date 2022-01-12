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
          <Route exact path='/' element={<AllUsers />} />
          <Route exact path='/add' element={<AddUsers />} />
          <Route element={<UserNotFound /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
