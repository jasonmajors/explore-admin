import React from 'react';
import { RadixProvider } from '@modulz/radix';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import CreateHunt from './views/CreateHunt';
import Login from './views/Login';

function App() {
  return (
    <RadixProvider>
      <Router>
        <div>
          <Route path="/create" component={ CreateHunt } />
          <Route path="/login" component={ Login } />
        </div>
      </Router>
    </RadixProvider>
  );
}

export default App;
