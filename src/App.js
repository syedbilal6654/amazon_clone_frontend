import React from 'react'
import Landingpage from './components/Layout/Landingpage';
import {useTranslation} from "react-i18next";
function App() {
  const [t, i18n] = useTranslation('common');

return (
    <div>
     <Landingpage t={t} i18n={i18n} />
    </div>
  )
}
export default App;