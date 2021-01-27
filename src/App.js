import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SingUp from './components/pages/SingUp';


function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/services' component={Services} />
      <Route path='/products' component={Products} />
      <Route path='/sing-up' component={SingUp} />
      </Switch>
      </Router>
      
    </>
  );
}

export default App;
