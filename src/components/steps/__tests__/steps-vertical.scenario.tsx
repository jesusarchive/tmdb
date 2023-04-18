import * as React from 'react';

import Steps from '..';

export const Scenario = () => {
  return (
    <Steps vertical>
      <Steps.Step>foo</Steps.Step>
      <Steps.Step>bar</Steps.Step>
      <Steps.Step>baz</Steps.Step>
    </Steps>
  );
};
