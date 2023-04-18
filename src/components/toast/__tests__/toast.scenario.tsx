import * as React from 'react';

import Toast from '../toast';

export const Scenario = () => {
  return (
    <>
      <span>Look at the bottom end of this story to see the toast.</span>
      <div className="w-full h-full">
        <Toast vertical="bottom" horizontal="end">
          Default toast
        </Toast>
      </div>
      <div className="toast">
        <div className="alert alert-info">
          <div>
            <span>New message arrived.</span>
          </div>
        </div>
      </div>
    </>
  );
};
