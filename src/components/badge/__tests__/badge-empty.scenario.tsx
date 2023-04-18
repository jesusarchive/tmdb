import * as React from 'react';

import Badge from '..';

export const Scenario = () => {
  return (
    <div className="flex gap-2 items-center">
      <Badge className="m-1" size="lg" />
      <Badge className="m-1" size="md" />
      <Badge className="m-1" size="sm" />
      <Badge className="m-1" size="xs" />
    </div>
  );
};
