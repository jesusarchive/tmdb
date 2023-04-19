import React from 'react';
import HomeCinema from '../../assets/home-cinema.svg';

const Home = () => {
  return (
    <div className="h-full w-full container mx-auto flex justify-center items-center">
      <img className="pt-60" src={HomeCinema} alt="Home cinema" />
    </div>
  );
};

export default Home;
