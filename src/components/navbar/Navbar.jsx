import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-scroll";

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
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "text-black logo" : "text-neutral-50"}>
        <h2 className="font-extrabold">BEACHES.</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home" className="cursor-pointer" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link
          to="destination"
          className="cursor-pointer"
          smooth={true}
          duration={500}
        >
          <li>Destination</li>
        </Link>
        <Link
          to="carousel"
          className="cursor-pointer"
          smooth={true}
          duration={500}
        >
          <li>Travel</li>
        </Link>
        <Link to="book" className="cursor-pointer" smooth={true} duration={500}>
          <li>Book</li>
        </Link>
        <Link
          to="views"
          className="cursor-pointer"
          smooth={true}
          duration={500}
        >
          <li>Views</li>
        </Link>
      </ul>
      <div className="nav-icons flex mr-2 space-x-4">
        <BiSearch className="icon" />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger cursor-pointer">
        {!nav ? (
          <HiOutlineMenuAlt4 onClick={handleNav} className="icon" />
        ) : (
          <AiOutlineClose
            onClick={handleNav}
            className="icon text-black w-10 text-xl"
          />
        )}
      </div>
      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link
            to="home"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            <li>Home</li>
          </Link>
          <Link
            to="destination"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            <li>Destination</li>
          </Link>
          <Link
            to="carousel"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            <li>Travel</li>
          </Link>
          <Link
            to="book"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            <li>Book</li>
          </Link>
          <Link
            to="views"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            <li>Views</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon cursor-default" />
            <FaInstagram className="icon cursor-pointer" />
            <FaTwitter className="icon cursor-pointer" />
            <FaPinterest className="icon cursor-pointer" />
            <FaYoutube className="icon cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
