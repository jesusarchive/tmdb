import * as React from 'react';

import Button from '../../button';
import Tooltip from '..';

export const Scenario = () => {
  return (
    <div className="my-6">
      <Tooltip message="hello">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  );
};
