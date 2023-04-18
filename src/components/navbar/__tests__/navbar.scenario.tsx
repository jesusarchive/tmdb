import * as React from 'react';

import Button from '../../button';
import Navbar from '..';

export const Scenario = () => {
  return (
    <Navbar className="bg-neutral text-neutral-content">
      <Button className="text-xl normal-case" color="ghost">
        daisyUI
      </Button>
    </Navbar>
  );
};
