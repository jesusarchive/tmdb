import * as React from 'react';

import Alert from '..';

export const Scenario = () => {
  return (
    <Alert
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#2196f3"
          className="w-6 h-6 mx-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      }
    >
      Lorem ipsum dolor sit amet, consectetur adip!
    </Alert>
  );
};
