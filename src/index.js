import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./pages/style.css";
import Mylogin from './modules/auth/Mylogin';
import Myregistor from './modules/auth/Myregistor';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mylanding from './modules/dashboard/Mylanding';
import Myabout from './modules/dashboard/Myabout';
import Myhome from './modules/dashboard/Myhome';
import Myservicedashboard from './modules/dashboard/services/Myservicedashboard';
import Myemp from './modules/dashboard/services/Myemp';
import Myfetchfunc from './modules/dashboard/services/Myfetchfunc';
import Myaxiosapi from './modules/dashboard/services/Myaxiosapi';
import Mychartpage from './modules/dashboard/Mychart';
import Productdetails from './modules/dashboard/services/Productdetails';
import Myerropage from './modules/dashboard/Myerropage';
import Myeditpage from './modules/auth/Myeditpage';
import Mydetails from './modules/auth/Mydetails';
// import Mylazylodingpage from './modules/dashboard/Mylazylodingpage';
const Mylazylodingpage = lazy(()=>import('./modules/dashboard/Mylazylodingpage'));








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
            <Route path='edit/:id' element={<Myeditpage/>}></Route>
            <Route path='view/:id' element={<Mydetails/>}></Route>
            <Route path='myservice' element={<Myservicedashboard/>}>
                <Route path='' element={<Myemp/>}/>
                <Route path='allemp' element={<Myfetchfunc/>}/>
                <Route path='allemp/view/:id' element={<Productdetails/>}/>
                <Route path='axiosapi' element={<Myaxiosapi/>}/>
            </Route>
            <Route path='charts' element={<Mychartpage/>}></Route>
            <Route path='lazypage' element={<Suspense fallback={<h1 className='myloading'>Loading......</h1>}>
              <Mylazylodingpage/>
            </Suspense>}/>
        </Route>
        <Route path='*' element={<Myerropage/>}/>
      </Routes>
     </BrowserRouter>
      
    
  </React.StrictMode>
);
