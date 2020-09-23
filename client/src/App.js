import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from "@reach/router";
import Register from './views/Register';
import Login from './views/Login';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Register path="/" />
        <Login path="/login" />
        <Main path="/dashboard" />
      </Router>
    </div>
  );
}

export default App;
