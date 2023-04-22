import * as React from 'react';

import Rating from '../rating';

export const Scenario = () => {
  return (
    <Rating value={1} onChange={() => {}}>
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
    </Rating>
  );
};
