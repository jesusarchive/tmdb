/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

import Stats from '..';
import Stat from '../stat';

export const Scenario = () => {
  return (
    <Stats className="bg-base-200 shadow">
      <Stats.Stat>
        <Stat.Item variant="title">Total Page Views</Stat.Item>
        <Stat.Item variant="value">89,400</Stat.Item>
        <Stat.Item variant="desc">21% more than last month</Stat.Item>
      </Stats.Stat>
    </Stats>
  );
  //   <div className="stat">
  //   <div className="stat-title">Total Page Views</div>
  //   <div className="stat-value">89,400</div>
  //   <div className="stat-desc">21% more than last month</div>
  // </div>
};
