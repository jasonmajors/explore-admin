import React from 'react';
import { RadixProvider } from '@modulz/radix';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import CreateHunt from './views/CreateHunt';

function App() {
  return (
    <RadixProvider>
      <Router>
        <div>
          <Route path="/create" component={CreateHunt} />
        </div>
      </Router>
    </RadixProvider>
  );
}

export default App;
