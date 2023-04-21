import * as React from 'react';

import Button from '../../button';
import Navbar from '../navbar';

export const Scenario = () => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar>
        <Navbar.Start>
          <Button className="text-xl normal-case" color="ghost">
            daisyUI
          </Button>
        </Navbar.Start>
        <Navbar.End>
          <Button shape="square" color="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </Button>
        </Navbar.End>
      </Navbar>
    </div>
  );
};
