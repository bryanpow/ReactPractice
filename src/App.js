
import Clicker from './Clicker'
import Footer from './Footer'
import Home from './Home'
import Nav from './Nav';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Nav />
      <Router>
        <Switch>
          <Route exact path='/'>
          <Home />
          </Route>
          <Route path='/Clicker'>
          <Clicker />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
