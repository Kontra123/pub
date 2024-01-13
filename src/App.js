import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './app/styles/app.scss'
import LoaderComponent from './app/components/loader/Loader.component';
import PageNotFoundView from './app/scenes/pageNotFound/pageNotFound.view'
// const Component = (lazy(() => import ('./component'))) 
const Login = (lazy(() => import ('./app/scenes/login/login.view'))) 
const Home = (lazy(() => import ('./app/scenes/home/home.view'))) 
// import LoginView from './scenes/auth/Login.view';

function App() {
  return (
    <div>
      <Router>
        {/* <ScrollToTop> */}
        <Suspense fallback={<LoaderComponent />}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />

            {/* Default route for unmatched paths */}
            <Route path="*" element={<PageNotFoundView />} />
          </Routes>
        </Suspense>
        {/* </ScrollToTop> */}
      </Router>
    </div>
  );
}

export default App;
