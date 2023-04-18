import * as React from 'react';

import Steps from '..';

export const Scenario = () => {
  return (
    <Steps>
      <Steps.Step color="primary">foo</Steps.Step>
      <Steps.Step>bar</Steps.Step>
      <Steps.Step>baz</Steps.Step>
    </Steps>
  );
};
