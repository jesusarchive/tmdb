/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useState } from 'react';

import Select from '..';

export const Scenario = () => {
  const [value, setValue] = useState('default') as any;

  return (
    <Select value={value} onChange={setValue}>
      <Select.Option value="default" disabled>
        Pick your favorite Simpson
      </Select.Option>
      <Select.Option value="Homer">Homer</Select.Option>
      <Select.Option value="Marge">Marge</Select.Option>
      <Select.Option value="Bart">Bart</Select.Option>
      <Select.Option value="Lisa">Lisa</Select.Option>
      <Select.Option value="Maggie">Maggie</Select.Option>
    </Select>
  );
};
