import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/login';
import Friends from './components/friends';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friends'>Friend List</Link>
          </li>
        </ul>
        <Route path='/login' component={Login} />
        <Route path='/friends' component={Friends} />
      </div>
    </Router>
  );
}

export default App;
