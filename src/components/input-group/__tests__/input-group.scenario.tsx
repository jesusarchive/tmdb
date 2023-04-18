import * as React from 'react';

import Form from '../../form';
import Input from '../../input';
import InputGroup from '../input-group';

export const Scenario = () => {
  return (
    <Form>
      <Form.Label title="Enter amount"></Form.Label>

      <InputGroup>
        <span>Price</span>
        <Input type="text" placeholder="10" bordered />
        <span>USD</span>
      </InputGroup>
    </Form>
  );
};
