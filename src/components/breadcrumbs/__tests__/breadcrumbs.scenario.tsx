import * as React from 'react';

import Breadcrumbs from '..';

export const Scenario = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/">Documents</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/">Add Document</Breadcrumbs.Item>
    </Breadcrumbs>
  );
};
