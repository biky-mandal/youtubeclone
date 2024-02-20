import React, { Component, useEffect } from 'react';
import './App.css';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import NotFound from './screens/NotFound/NotFound';
import { BrowserRouter as Router, Route, Routes, useNavigate  } from 'react-router-dom'
import { useSelector } from 'react-redux';

const App = () => {

  const navigate = useNavigate ();
  const { accessToken, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if(!loading && !accessToken){
      navigate('/auth');
    }
  }, [accessToken, loading, navigate])

  return <Routes>
      <Route exact path='/youtubeclone' element={<Home />} />
      <Route path='/auth' element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
}

export default App;