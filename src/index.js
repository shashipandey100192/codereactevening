import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Mylogin from './modules/auth/Mylogin';
import Myregistor from './modules/auth/Myregistor';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Mylogin/>
      <Myregistor/>
      
    
  </React.StrictMode>
);
