import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import './App.css';
import routes from './routes'
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div className="App">
          {routes}
        </div>
      </Router>
    </div>
  );
}

export default App;
