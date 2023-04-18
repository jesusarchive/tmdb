import * as React from 'react';

import Button from '..';

export const Scenario = () => {
  return (
    <div className="flex gap-x-2">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
      {/* <div className="btn btn-outline btn-link"></div> */}
    </div>
  );
};
