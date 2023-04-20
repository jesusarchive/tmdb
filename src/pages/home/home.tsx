import React from 'react';

import HomeCinema from '../../assets/home-cinema.svg';

const Home = () => {
  return (
    <div className="h-full w-full container mx-auto flex flex-col justify-center items-center">
      <img className="h-[40vh]" src={HomeCinema} alt="Home cinema" />
      <h1 className="font-mono text-7xl p-5">TMDb</h1>
    </div>
  );
};

export default Home;
