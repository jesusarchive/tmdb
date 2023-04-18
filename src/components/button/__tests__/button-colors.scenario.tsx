import * as React from 'react';

import Button from '..';

export const Scenario = () => {
  return (
    <div>
      <div>
        <Button className="m-1">Default</Button>
        <Button className="m-1" color="primary">
          Primary
        </Button>
        <Button className="m-1" color="secondary">
          Secondary
        </Button>
        <Button className="m-1" color="accent">
          Accent
        </Button>
        <Button className="m-1" color="ghost">
          Ghost
        </Button>
      </div>
      <div>
        <Button className="m-1" color="success">
          Success
        </Button>
        <Button className="m-1" color="info">
          Info
        </Button>
        <Button className="m-1" color="warning">
          Warning
        </Button>
        <Button className="m-1" color="error">
          Error
        </Button>
      </div>
      {/* <div className="btn btn-primary btn-secondary btn-accent btn-ghost btn-success btn-info btn-warning btn-error"></div> */}
    </div>
  );
};
