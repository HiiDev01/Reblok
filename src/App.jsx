import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import Search from './pages/Search';
import SignIn from './pages/SignIn';
import './App.css'
import SignUp from './pages/SignupChoice';
import AgentSignup from './pages/AgentSignup';
import UserSignup from './pages/UserSignup';
import NotFound from './pages/NotFound';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/search' element={<Search/>}></Route>
          <Route exact path='/signin' element={<SignIn/>}></Route>
          <Route exact path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/signup/agent' element={<AgentSignup/>}></Route>
          <Route exact path='/signup/user' element={<UserSignup/>}></Route>
          <Route exact path='/*' element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
