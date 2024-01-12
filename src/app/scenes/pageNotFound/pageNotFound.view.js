import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFoundView = () => {
  return (
    <div>
      <div className="max-width page-not-found">
        <h1>Page not found</h1>
        <NavLink to="/"
          activeClassName='active'>Home Page</NavLink>
      </div>
    </div>
  );
};

export default PageNotFoundView;
