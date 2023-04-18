import React from 'react';

import Button from '../../button';
import Badge from '..';

export const Scenario = () => {
  return (
    <div className="flex gap-2 items-center">
      <Button className="gap-2">
        Inbox
        <Badge>+99</Badge>
      </Button>
      <Button className="gap-2">
        Inbox
        <Badge color="primary">+99</Badge>
      </Button>
    </div>
  );
};
