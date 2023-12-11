import { NavLink } from "react-router-dom";
import logo from "../image/white-logo.png";
import "../styles/header.css";
import { useState, useEffect } from "react";

function Header() {
  const [menu, setMenu] = useState(true);
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
  }, []);

  const stickyHeader = () => {
    const winScroll = window.scrollY;
    const stickHeader =
      winScroll >= 250 ? "fixed bg-gray-900 " : "absolute bg-transparent";
    setSticky(stickHeader);
    console.log(winScroll);
  };

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <div
      className={`header flex justify-center items-center h-[10vh] z-10  w-screen text-white ${sticky}`}
    >
      <div className="w-[90vw] flex justify-between items-center">
        <img src={logo} alt="logo" className="w-24 h-10" />
        <nav
          className={
            menu === false
              ? "h-[0vh]"
              : `h-[50vh] absolute rounded-[30px] w-[90vw] bg-[#212529] grid justify-items-center 
            md:bg-transparent top-[10vh] md:relative md:top-0 md:h-[10vh]
            md:flex md:items-center md:w-[60vw] md:rounded-none`
          }
        >
          <NavLink
            to="/"
            className="w-[90%] border-b-[1px] border-gray-600 md:border-none md:w-[20%] grid content-center text-center h-[10vh] hover:text-[#ff565b] transition duration-500 ease-in"
          >
            Homepage
          </NavLink>
          <NavLink
            to="/about"
            className="w-[90%] border-b-[1px] border-gray-600 md:border-none md:w-[20%] grid content-center text-center h-[10vh] hover:text-[#ff565b] transition duration-500 ease-in"
          >
            About Us
          </NavLink>
          <NavLink
            to="/explore"
            className="w-[90%] border-b-[1px] border-gray-600 md:border-none md:w-[20%] grid content-center text-center h-[10vh] hover:text-[#ff565b] transition duration-500 ease-in"
          >
            Explore Work
          </NavLink>
          <NavLink
            to="/trending"
            className="w-[90%] border-b-[1px] border-gray-600 md:border-none md:w-[20%] grid content-center text-center h-[10vh] hover:text-[#ff565b] transition duration-500 ease-in"
          >
            Trending
          </NavLink>
          <NavLink
            to="/contact"
            className="w-[90%] border-b-[1px] border-gray-600 md:border-none md:w-[20%] grid content-center text-center h-[10vh] hover:text-[#ff565b] transition duration-500 ease-in"
          >
            Contact Us
          </NavLink>
        </nav>
        <div
          className="bg-[#fff] p-2 px-4 rounded-md md:hidden"
          onClick={openMenu}
        >
          <p className="text-gray-600 text-2xl">&#9776;</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
