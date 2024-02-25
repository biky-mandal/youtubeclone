import React, { useEffect } from 'react';
import './App.css';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import NotFound from './screens/NotFound/NotFound';
import { Route, Routes, useNavigate  } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Watch from './screens/Watch/Watch';

const App = () => {

  const navigate = useNavigate ();
  const { accessToken, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if(!loading && !accessToken){
      navigate('/auth');
    }
  }, [accessToken, loading, navigate])

  return <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/watch' element={<Watch />} />
      <Route path='/auth' element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
}

export default App;