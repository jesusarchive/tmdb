import React from 'react';

type HeaderProps = {
  search: string;
  title: string;
  description: string;
};

const Header: React.FC<HeaderProps> = ({ search, title, description }) => {
  return (
    <div className="pb-20">
      {search ? (
        <h1 className="text-6xl">{`Search "${search}"`}</h1>
      ) : (
        <>
          <h1 className="text-5xl pb-4">{title}</h1>
          <p className="text-lg">{description}</p>
        </>
      )}
    </div>
  );
};

export default Header;
