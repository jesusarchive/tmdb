import React from 'react';

import { Badge } from '../../components';

export type GenresProps = {
  genres: Array<{ id: string; name: string }>;
};

const Genres: React.FC<GenresProps> = ({ genres }) => {
  return (
    <div className="flex space-x-2">
      {genres?.map(({ id, name }) => (
        <Badge key={id} className="text-lg p-4" size="md">
          {name}
        </Badge>
      ))}
    </div>
  );
};

export default Genres;
