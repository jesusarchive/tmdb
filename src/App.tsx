import React from 'react';

import HomePage from './pages/home';
import MoviePage from './pages/movie';
// import MoviesPage from './pages/movies';

const App = () => {
  return (
    <div>
      <HomePage></HomePage>
      {/* <MoviesPage></MoviesPage> */}
      <MoviePage></MoviePage>
    </div>
  );
};

export default App;
