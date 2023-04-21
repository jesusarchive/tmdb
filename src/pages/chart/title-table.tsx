import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

// import BookmarkIcon from '../../assets/bookmark.svg';
import { Table } from '../../components';
import { IMAGE_BASE_URL } from '../../services/constants';
import { MovieType } from '../../services/movie';
import { useStore } from '../../store/store';

export type TitleTableProps = {
  titles: Array<MovieType>;
};

// Table of titles (movies, tv shows...)
const TitleTable: React.FC<TitleTableProps> = ({ titles }) => {
  const { state } = useStore();

  const getMovieRatingFromUserState = (movie) =>
    state.guest && state.guest?.rated_movies?.results?.find((el) => el.id === movie?.id)?.rating;

  return (
    <Table className="min-h-[65vh] w-full" compact>
      <Table.Head>
        <span />
        <span>Title</span>
        <span>TMDb Rating</span>
        <span>Your Rating</span>
        {/* <span /> */}
      </Table.Head>

      <Table.Body>
        {titles?.map((title) => {
          const rating = getMovieRatingFromUserState(title);

          return (
            <Table.Row key={title.id}>
              {/* POSTER */}
              <div className="w-12">
                <Link to={`/title/${title.id}`}>
                  <img className="w-full" src={`${IMAGE_BASE_URL}${title.poster_path}`} alt="poster" />
                </Link>
              </div>
              {/* TITLE & YEAR */}
              <div className="space-x-2 text-lg">
                <Link className="link" to={`/title/${title.id}`}>
                  {title.title}
                </Link>
                <span>{`(${new Date(title.release_date).getFullYear()})`}</span>
              </div>
              {/* RATING */}
              <div className="flex space-x-1 text-lg">
                <StarIcon className="h-6 w-6 text-yellow-600" />
                <span className="font-bold">{title.vote_average.toFixed(1)}</span>
              </div>
              {/* USER RATING */}
              <div className="flex space-x-1 text-lg">
                {rating ? (
                  <>
                    <StarIcon className="h-6 w-6 text-blue-600" />
                    <span className="font-bold">{rating}</span>
                  </>
                ) : (
                  <>
                    <StarOutlineIcon className="h-6 w-6 text-blue-600" />
                    <span className="font-bold text-blue-600">Rate</span>
                  </>
                )}
              </div>
              {/* BOOKMARK */}
              {/* <div>
                <img src={BookmarkIcon} alt="bookmark" />
              </div> */}
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default TitleTable;
