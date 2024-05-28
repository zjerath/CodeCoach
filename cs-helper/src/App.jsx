import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FunctionHelper from './components/FunctionHelper';
import Walkthrough from './components/Walkthrough';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="App">
              <div className="appflex">
                <img src="/logowhite.png" alt="CodeCoach Logo" className="logowhite" />
                <h1 className='codecoach'>CodeCoach</h1>
              </div>
              <div className='appcenter'>
                <nav className='navflex'>
                  <button className='appbutton'>
                    <Link to="/function-helper" className='navlink'>Give Me Examples</Link>
                  </button>
                  <button className='appbutton'>
                    <Link to="/walkthrough" className='navlink'>Walk Through My Code</Link>
                  </button>
                </nav>
              </div>
            </div>
          } 
        />
        <Route path="/function-helper" element={<FunctionHelper />} />
        <Route path="/walkthrough" element={<Walkthrough />} />
      </Routes>
    </Router>
  );
};

export default App;