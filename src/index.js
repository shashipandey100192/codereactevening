import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Mylogin from './modules/auth/Mylogin';
import Myregistor from './modules/auth/Myregistor';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mylanding from './modules/dashboard/Mylanding';
import Myabout from './modules/dashboard/Myabout';
import Myhome from './modules/dashboard/Myhome';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path='' element={<Mylogin/>}></Route>
        <Route path='registor' element={<Myregistor/>}></Route>
        <Route path='landing' element={<Mylanding/>}>
            <Route path='' element={<Myhome/>}></Route>
            <Route path='about' element={<Myabout/>}></Route>


        </Route>
      </Routes>
     </BrowserRouter>
      
    
  </React.StrictMode>
);
