import React, { useEffect, useState } from 'react';

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  initialValue?: number;
  onChange: (...args: any) => any;
}

const Rating: React.FC<RatingProps> = ({ max = 10, initialValue = 0, onChange }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <div className="rating rating-half">
      {/* RESET */}
      <input type="radio" name="rating-1" className="rating-hidden" checked={value === 0} onClick={() => setValue(0)} />
      {/* STARS */}
      {[...Array(max).keys()].map((el) => (
        <>
          {/* HALF */}
          <input
            type="radio"
            name="rating-1"
            className="bg-blue-600 mask mask-star-2 mask-half-1"
            checked={value === el + 0.5}
            onClick={() => setValue(el + 0.5)}
          />
          {/* COMPLETE */}
          <input
            type="radio"
            name="rating-1"
            className="bg-blue-600 mask mask-star-2 mask-half-2"
            checked={value === el + 1}
            onClick={() => setValue(el + 1)}
          />
        </>
      ))}
    </div>
  );
};

export default Rating;
