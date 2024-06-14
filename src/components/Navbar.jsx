import React from "react";
import Logo from "../../logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex space-x-6 text-xl items-center border">
      <img className="w-18 h-14" src={Logo} alt="Logo" />
      <Link to="/">Movies</Link>
      <Link to="/Watchlist">Watchlist</Link>
    </div>
  );
};

export default Navbar;
