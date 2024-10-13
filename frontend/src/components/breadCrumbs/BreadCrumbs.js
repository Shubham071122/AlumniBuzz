import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-sm text-gray-600 font-medium mb-4">
      {pathnames.length > 0 ? (
        <Link to="/">Home</Link>
      ) : (
        <span>Home</span>
      )}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <span key={to}>
            {' / '}
            <Link to={to}>{value}</Link>
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
