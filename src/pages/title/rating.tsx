import React from 'react';

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  value?: number;
  onChange: (...args: any) => any;
}

const Rating: React.FC<RatingProps> = ({ max = 10, value, onChange }) => {
  return (
    <div className="rating rating-half">
      <input type="radio" name="rating-1" className="rating-hidden" checked={value === 0} readOnly />
      {[...Array(max).keys()].map((el, index) => (
        <>
          <input
            type="radio"
            name="rating-1"
            className="bg-blue-600 mask mask-star-2 mask-half-1"
            checked={value === index + 0.5}
            onChange={() => onChange?.(el + 0.5)}
          />
          <input
            type="radio"
            name="rating-1"
            className="bg-blue-600 mask mask-star-2 mask-half-2"
            checked={value === index + 1}
            onChange={() => onChange?.(index + 1)}
          />
        </>
      ))}
    </div>
  );
};

export default Rating;
