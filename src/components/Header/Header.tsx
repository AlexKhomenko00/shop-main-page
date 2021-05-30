import React from "react";

type HeaderProps = {
  logoName: string;
};

const Header = ({ logoName }: HeaderProps): JSX.Element => {
  return (
    <header className="text-center text-gray-500 mt-5 mb-16">
      <span className="text-3xl font-light">{logoName}</span>
    </header>
  );
};

export default Header;
