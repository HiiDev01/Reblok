import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import SignIn from './pages/SignIn';
import './App.css'
import SignUp from './pages/SignupChoice';
import AgentSignup from './pages/AgentSignup';
import UserSignup from './pages/UserSignup';
import NotFound from './pages/NotFound';
import PropertyDetails from './pages/PropertyDetails';
import PropertyPage from './pages/PropertyPage';
import 'leaflet/dist/leaflet.css';

function App() {


  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/search' element={<PropertyPage/>}></Route>
          <Route exact path='/signin' element={<SignIn/>}></Route>
          <Route exact path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/signup/agent' element={<AgentSignup/>}></Route>
          <Route exact path='/signup/user' element={<UserSignup/>}></Route>
          <Route exact path='/*' element={<NotFound/>}></Route>
          <Route exact path='/properties' element={<PropertyPage/>}></Route>
          <Route exact path='/properties/:id' element={<PropertyDetails/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
