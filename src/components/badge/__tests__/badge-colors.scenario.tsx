import * as React from 'react';

import Badge from '..';

export const Scenario = () => {
  return (
    <div>
      <div>
        <Badge className="m-1">neutral</Badge>
        <Badge className="m-1" color="primary">
          primary
        </Badge>
        <Badge className="m-1" color="secondary">
          secondary
        </Badge>
        <Badge className="m-1" color="accent">
          accent
        </Badge>
        <Badge className="m-1" color="ghost">
          ghost
        </Badge>
      </div>
      <div>
        <Badge className="m-1" color="success">
          success
        </Badge>
        <Badge className="m-1" color="info">
          info
        </Badge>
        <Badge className="m-1" color="warning">
          warning
        </Badge>
        <Badge className="m-1" color="error">
          error
        </Badge>
      </div>
      {/* <div className="badge badge-neutral badge-primary badge-secondary badge-accent badge-info badge-success badge-warning badge-error badge-ghost"></div> */}
    </div>
  );
};
