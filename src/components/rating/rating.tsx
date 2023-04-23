import clsx from 'clsx';
import React, { ReactElement } from 'react';

import { Size } from '../types';
import RatingItem, { RatingItemProps } from './rating-item';

export interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  size?: Size;
  half?: boolean;
  hidden?: boolean;
  value: number;
  onChange?: (newRating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ children, size, half, hidden, className, value, onChange, ...props }) => {
  const classes = clsx('rating', className, {
    [`rating-${size}`]: size,
    'rating-half': half,
    'rating-hidden': hidden || value === 0
  });

  return (
    <div aria-label="Rating" {...props} className={classes}>
      {value === 0 && <RatingItem className={clsx(classes, 'hidden')} checked readOnly />}
      {React.Children.map(children, (child, index) => {
        const childComponent = child as ReactElement<RatingItemProps>;

        return React.cloneElement(childComponent, {
          key: index + value,
          checked: value === index + 1,
          readOnly: !!onChange,
          onChange: () => {
            onChange?.(index + 1);
          }
        });
      })}
    </div>
  );
};

export default Object.assign(Rating, { Item: RatingItem });
