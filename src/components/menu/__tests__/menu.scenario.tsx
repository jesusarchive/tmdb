import * as React from 'react';

import Menu from '../menu';

export const Scenario = () => {
  return (
    <div className="flex w-full justify-center p-4 items-center font-sans">
      <Menu className="bg-base-100 w-56 shadow-xl">
        <Menu.Item className="bg-base-100 w-56 shadow-xl">
          <a>Item 1</a>
        </Menu.Item>
        <Menu.Item className="bg-base-100 w-56 shadow-xl">
          <a>Item 2</a>
        </Menu.Item>
        <Menu.Item className="bg-base-100 w-56 shadow-xl">
          <a>Item 3</a>
        </Menu.Item>
      </Menu>
    </div>
  );
};
