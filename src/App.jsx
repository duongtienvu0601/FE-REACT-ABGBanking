import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Wallet from './pages/Wallet';
import History from './pages/History';
import Markets from './pages/Markets';
import ProductsManager from './manages/ProductsManager';
function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path='/wallet' element={<Wallet />}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/features' element={<Markets/>}/>
        <Route path='/products' element={<ProductsManager/>}/>
      </Routes>
     
    </>
  );
}

export default App;
