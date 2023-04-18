import * as React from 'react';

import Alert from '../../alert';
import Toast from '..';

export const Scenario = () => {
  return (
    <>
      <span>Look at the bottom end of this story to see the toast.</span>
      <Toast vertical="bottom" horizontal="end">
        <Alert status="info">New message arrived.</Alert>
      </Toast>
    </>
  );
};
