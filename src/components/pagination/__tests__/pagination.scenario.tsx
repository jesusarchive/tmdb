import * as React from 'react';

import Button from '../../button';
import Pagination from '..';

export const Scenario = () => {
  return (
    <Pagination>
      <Button>1</Button>
      <Button active>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </Pagination>
  );
};
