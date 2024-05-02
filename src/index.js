import React from 'react';
import ReactDOM from 'react-dom/client';
import Myhome from "./pages/Home";
import Aboutaaa, { Mycontact1, Mycontact } from './pages/About';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Mybootstrappage from './pages/Mybootstrappage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mybootstrappage/>
    <Myhome></Myhome>
    <Aboutaaa></Aboutaaa>
    <Mycontact></Mycontact>
    <Mycontact1></Mycontact1>
    
  </React.StrictMode>
);
