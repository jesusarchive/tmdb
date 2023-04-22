import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import { IMAGE_BASE_URL } from '../../config/api';
import { MovieType } from '../../services/movie';
import { RESULT_DETAIL_URL } from './constants';

export type ResultListProps = {
  titles: Array<MovieType>;
};

const ResultList: React.FC<ResultListProps> = ({ titles }) => {
  return (
    <ul>
      {titles?.map((title) => {
        const resultDetailUrl = `${RESULT_DETAIL_URL}/${title.id}`;

        return (
          <li
            className={clsx('w-full h-24 flex justify-start space-x-2 border-base-200 pt-1 border-b-2')}
            key={title.id}
          >
            {/* POSTER */}
            <div className="w-14">
              <Link to={resultDetailUrl}>
                <img className="w-full" src={`${IMAGE_BASE_URL}${title.poster_path}`} alt="poster" />
              </Link>
            </div>
            <div className="h-18 max-w-[90%] flex flex-col">
              <div className="flex flex-col">
                {/* TITLE */}
                <Link className="link font-bold" to={resultDetailUrl}>
                  {title.title}
                </Link>
                {/* YEAR */}
                {title.release_date && <span>{`${new Date(title.release_date).getFullYear()}`}</span>}
                {/* DESCRIPTION */}
                <p className="text-md text-neutral-500 overflow-hidden whitespace-nowrap text-ellipsis">
                  {title.overview}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ResultList;
