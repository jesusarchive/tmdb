import React from 'react';

import { CastType, CrewType } from '../../services/movie';
import { GOOGLE_SEARCH_URL } from './constants';

type PresentationProps = {
  data: {
    directors: Array<CrewType>;
    writers: Array<CrewType>;
    stars: Array<CastType>;
  };
};

const Presentation: React.FC<PresentationProps> = ({ data }) => {
  // return singular or plural depending on values length
  const getFormattedCategoryName = (category: string, values: Array<CrewType | CastType>): string => {
    return values.length > 1 ? category : category.slice(0, -1);
  };

  return (
    <>
      {Object.entries(data).map(([category, values]) => {
        return (
          <>
            <div className="divider"></div>
            <div className="w-full flex items-center space-x-2 text-lg">
              <span className="font-bold capitalize">{getFormattedCategoryName(category, values)}</span>

              {values.map((person: CastType | CrewType, i) => (
                <div key={person.credit_id} className="space-x-2">
                  <a className="link" href={`${GOOGLE_SEARCH_URL}${person.name}`} rel="noreferrer" target="_blank">
                    {person.name}
                  </a>
                  {i !== values.length - 1 && <span>|</span>}
                </div>
              ))}
            </div>
          </>
        );
      })}
      <div className="divider"></div>
    </>
  );
};

export default Presentation;
