import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './app/styles/app.scss'
import LoaderComponent from './app/components/loader/Loader.component';
import PageNotFoundView from './app/scenes/pageNotFound/pageNotFound.view'
// const Component = (lazy(() => import ('./component'))) 
const Login = (lazy(() => import ('./app/scenes/login/login.view'))) 
// import LoginView from './scenes/auth/Login.view';

// Lazy load the component with a delay
const DelayedComponent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import( './component'));
    }, 3000); // Delay in milliseconds, e.g., 3000ms = 3 seconds
  });
});

function App() {
  return (
    <div>
      <Router>
        {/* <ScrollToTop> */}
        <Suspense fallback={<LoaderComponent />}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />

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
