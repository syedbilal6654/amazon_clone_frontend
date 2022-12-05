import React from 'react'
import Landingpage from './components/Layout/Landingpage';
import {useTranslation} from "react-i18next";
import NavbarConatiner from './components/Layout/NavbarConatiner/Navbar';
import Footer from './components/Layout/Footer';
import LoginContainer from './components/Login/LoginContainer';
function App() {
  const [t, i18n] = useTranslation('common');

return (
    <div>
   {/*   <Landingpage t={t} i18n={i18n} /> */}
   <NavbarConatiner t={t} i18n={i18n} />
  <LoginContainer/>
   <Footer t={t} i18n={i18n} />
    </div>
  )
}
export default App;