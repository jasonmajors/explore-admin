import React from 'react';
import { RadixProvider } from '@modulz/radix';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import CreateHunt from './views/CreateHunt';
import Login from './views/Login';
import Home from './views/Home';

function App() {
  return (
    <RadixProvider>
      <Router>
        <div>
          <Route
            path="/"
            component={ Home }
            // render={ props => <Home { ...props } /> }
          />
          <Route
            path="/create"
            render={ props => <CreateHunt { ...props } /> }
          />
          <Route
            path="/login"
            render={ props => <Login { ...props } /> }
          />
        </div>
      </Router>
    </RadixProvider>
  );
}

export default App;
