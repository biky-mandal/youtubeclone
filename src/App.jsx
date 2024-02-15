import React, { Component } from 'react';
import './App.css';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import NotFound from './screens/NotFound/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class App extends Component {
  render() {
    return <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/auth' element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  }
}

export default App;