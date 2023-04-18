import * as React from 'react';

import Button from '../../button';
import Alert from '..';

export const Scenario = () => {
  return (
    <Alert
      status="info"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      }
      color="info"
    >
      <div className="w-full flex-row justify-between gap-2">
        <h3 className="text-lg font-bold">This is a custom alert!</h3>
        <h4>Some information about the alert...</h4>
      </div>
      <Button>Dismiss</Button>
    </Alert>
  );
};
