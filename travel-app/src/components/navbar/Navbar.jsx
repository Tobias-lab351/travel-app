import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  return (
    <div className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "text-black logo" : "text-neutral-50"}>
        <h2>BEACHES.</h2>
      </div>
      <ul className="nav-menu">
        <li>Destination</li>
        <li>Home</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Views</li>
      </ul>
      <div className="nav-icons flex mr-2 space-x-4">
        <BiSearch className="icon" />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger cursor-pointer">
        {!nav ? (
          <HiOutlineMenuAlt4 onClick={handleNav} className="icon" />
        ) : (
          <AiOutlineClose onClick={handleNav} className="icon text-black w-10 text-xl" />
        )}
      </div>
      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>Book</li>
          <li>Views</li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
