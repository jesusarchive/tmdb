import React from 'react';

export type RatingItemProps = React.InputHTMLAttributes<HTMLInputElement>;

const RatingItem: React.FC<RatingItemProps> = ({ ...props }) => {
  return <input {...props} type="checkbox" />;
};

export default RatingItem;
