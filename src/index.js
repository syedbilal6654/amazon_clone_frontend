import react from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_in from "../src/Translations/in/common.json";
import common_en from "../src/Translations/en/common.json";
import common_bd from "../src/Translations/bd/common.json";
import common_pk from "../src/Translations/pk/common.json";

i18next.init({
    whitelist:['pk','en','bd','in'],
    interpolation: { escapeValue: false },  
    lng: 'en',                             
    resources: {
        en: {
            common: common_en               
        },
        bd: {
            common: common_bd
        }, 
        pk: {
            common: common_pk
        },
        in: {
            common: common_in
        },
    },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
    <App/>
</I18nextProvider>,
document.getElementById('root')

);