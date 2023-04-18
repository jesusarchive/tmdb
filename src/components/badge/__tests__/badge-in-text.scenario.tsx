import * as React from 'react';

import Badge from '..';

export const Scenario = () => {
  return (
    <div className="flex gap-2 items-center">
      <h2 className="text-xl gap-2">
        Heading <Badge size="lg">NEW</Badge>
      </h2>
    </div>
  );
};
