import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Landingpage from './components/Layout/Landingpage';
import {useTranslation} from "react-i18next";
import NavbarConatiner from './components/Layout/NavbarConatiner/Navbar';
import Footer from './components/Layout/Footer';
import LoginContainer from './components/Login/LoginContainer';
import RegisterContainer from './components/Register/RegisterContainer';

function App() {

  

  const [t, i18n] = useTranslation('common')
  const Login=()=>(
    <LoginContainer t={t} i18n={i18n}/>
  )
   const Landing=()=>(
    <Landingpage t={t} i18n={i18n}/>
   )
   const Register=()=>(
    <RegisterContainer t={t} i18n={i18n}/>
   )
return (
    <Router>
    <div>    
      <NavbarConatiner t={t} i18n={i18n} />
      <Routes>      
      <Route path='/' element={<Landing />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      
      </Routes>
      
      <Footer t={t} i18n={i18n} />
    </div>
    </Router>
  )
}
export default App;