import * as React from 'react';

import Divider from '..';

export const Scenario = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
      <Divider vertical></Divider>
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
    </div>
  );
};
