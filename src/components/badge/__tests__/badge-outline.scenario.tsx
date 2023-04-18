import * as React from 'react';

import Badge from '..';

export const Scenario = () => {
  return (
    <div>
      <Badge className="m-1" variant="outline">
        neutral
      </Badge>
      <Badge className="m-1" color="primary" variant="outline">
        primary
      </Badge>
      <Badge className="m-1" color="secondary" variant="outline">
        secondary
      </Badge>
      <Badge className="m-1" color="accent" variant="outline">
        accent
      </Badge>
      {/* <div className="badge badge-outline"></div> */}
    </div>
  );
};
