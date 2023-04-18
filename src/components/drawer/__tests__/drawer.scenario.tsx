import * as React from 'react';
import { useState } from 'react';

import Button from '../../button';
import Drawer from '..';

const side = (
  <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    <li>
      <a>Sidebar Item 1</a>
    </li>
    <li>
      <a>Sidebar Item 2</a>
    </li>
  </ul>
);

export const Scenario = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Drawer open={visible} onClickOverlay={toggleVisible} side={side}>
      <div className="flex h-56 items-center justify-center">
        <Button color="primary" onClick={toggleVisible}>
          Open drawer
        </Button>
      </div>
    </Drawer>
  );
};
