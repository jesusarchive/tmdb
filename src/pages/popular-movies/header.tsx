import React from 'react';

type HeaderProps = {
  title: string;
  subtitle: string;
  description: string;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle, description }) => {
  return (
    <div>
      <h3 className="text-xl pb-2">{title}</h3>
      <h1 className="text-3xl">{subtitle}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Header;
