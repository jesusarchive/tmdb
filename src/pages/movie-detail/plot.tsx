import React from 'react';

type PlotProps = {
  plot: string;
};

const Plot: React.FC<PlotProps> = ({ plot }) => {
  return (
    <div className="pt-4 pb-4">
      <p className="text-lg text-neutral-500">{plot}</p>
    </div>
  );
};

export default Plot;
