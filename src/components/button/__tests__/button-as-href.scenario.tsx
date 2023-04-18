import * as React from 'react';

import Button from '..';

export const Scenario = () => {
  return (
    <div className="flex gap-x-2">
      <Button onClick={() => alert('See, I have an onClick event and no href.')}>{`I'm a <button>`}</Button>
      <Button href="https://google.com">{`I'm an <a>`}</Button>
    </div>
  );
};
