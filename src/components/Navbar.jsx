import React from "react";
import Logo from "../../wordart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex space-x-6 text-xl items-center border">
      <img className="w-18 h-14" src={Logo} alt="Logo" />
      <Link className="font-extralight hover:font-semibold" to="/">Movies</Link>
      <Link className="font-extralight hover:font-semibold " to="/Watchlist">Watchlist</Link>
    </div>
  );
};

export default Navbar;
