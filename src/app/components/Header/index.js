import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
    </div>
  );
};

export default Header;
