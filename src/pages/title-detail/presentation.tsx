import React from 'react';

import { CastType, CrewType } from '../../services/movie';

export type PresentationProps = {
  data: { director: Array<CrewType>; writers: Array<CrewType>; stars: Array<CastType> };
};

const Presentation: React.FC<PresentationProps> = ({ data }) => {
  return (
    <>
      {Object.entries(data).map(([key, value]) => {
        return (
          <>
            <div className="divider"></div>
            <div className="w-full flex items-center space-x-2 text-lg">
              <span className="font-bold capitalize">{key}</span>

              {value.map((el: CastType | CrewType, i) => (
                <div key={el.credit_id} className="space-x-2">
                  <a
                    className="link"
                    href={`https://www.google.com/search?q=${el.name}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {el.name}
                  </a>
                  {i !== value.length - 1 && <span>|</span>}
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
