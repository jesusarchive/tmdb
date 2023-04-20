import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className="min-h-[81vh] container mx-auto">
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};

export default NoMatch;
