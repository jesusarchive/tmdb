import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../../components';
import { IMAGE_BASE_URL } from '../../services/constants';
import { MovieWithRatingType } from '../../services/movie';
import { useStore } from '../../store/store';

const Ratings = () => {
  const { state } = useStore();

  return (
    <div className="min-h-[80vh] container mx-auto">
      {state?.guest?.rated_movies?.results?.length > 0 ? (
        <div className="">
          <h1 className="text-3xl pb-5">Your Ratings</h1>

          {state?.guest?.rated_movies.results.map((title: MovieWithRatingType) => (
            <div key={title.id}>
              <Card className="rounded-none" side compact>
                <Card.Image className="w-40" src={`${IMAGE_BASE_URL}${title.poster_path}`} alt="poster" />
                <Card.Body className="w-full">
                  <Card.Title tag="h2">
                    <Link className="link" to={`/title/${title.id}`}>
                      {title.original_title}
                    </Link>
                    {title.release_date && <span>{`(${new Date(title.release_date).getFullYear()})`}</span>}
                  </Card.Title>
                  <div className="flex items-center space-x-2">
                    <StarIcon className="h-6 w-6 text-blue-600" />
                    <span className="text-lg">{title.rating}</span>
                  </div>
                  <p className="w-full">{title.overview}</p>
                  {/* <Card.Actions className="justify-end">
                    <Button color="primary">Buy Now</Button>
                  </Card.Actions> */}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-3xl">No rated movies</h1>
      )}
    </div>
  );
};

export default Ratings;
