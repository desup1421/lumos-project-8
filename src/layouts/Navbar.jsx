import React, { useState } from "react";
import { Link } from "react-router-dom";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`flex flex-col tablet:flex-row justify-between items-center fixed bg-light z-50 top-0 left-0 w-full ${isOpen ? 'h-screen': 'h-[72px]'}  p-[20px] tablet:h-[80px] desktop:h-[60px] transition-all duration-500 overflow-hidden lg:px-32`}>
      {/* NAV HEADER */}
      <div className={`flex ${isOpen && 'invisible'} items-center justify-between w-full`}>
        <span className="font-bold text-[18px]">LumosBlog</span>
        {/* TOGGLE BUTTON */}
        <button onClick={() => setIsOpen(true)} >
          <img src={menu} className="w-[32px] tablet:hidden" alt="menu icon" />
        </button>
      </div>

      {/* NAV BODY */}
      <div className={`${!isOpen && 'invisible'} tablet:visible flex flex-col tablet:flex-row justify-between items-center gap-4`}>
        <ul className="flex flex-col tablet:flex-row items-center gap-4">
          <li>
            <Link onClick={() => setIsOpen(false)} to="/">Blog</Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/newsletter">Newsletter</Link>
          </li>
        </ul>
        <div className="rounded-[29px] bg-dark dark:bg-light w-[96px] h-[40px] flex justify-around items-center border">
          <label className="border border-dark rounded-full" htmlFor="light">
            <img className="w-[24px] h-[24px]" src={sun} alt="" />
          </label>
          <input
            className="hidden"
            type="radio"
            name="theme"
            id="light"
            value="light"
            aria-hidden
          />
          <label
            className="border rounded-full bg-dark border-light"
            htmlFor="dark"
          >
            <img className="w-[24px] h-[24px] invisible" src={moon} alt="" />
          </label>
          <input
            className="hidden"
            type="radio"
            name="theme"
            id="dark"
            value="dark"
            aria-hidden
          />
        </div>
      </div>

      {/* NAV FOOTER */}
      <button onClick={() => setIsOpen(false)} className={`bg-dark rounded-full tablet:hidden`}>
        <img src={close} alt="" />
      </button>
    </nav>
  );
};

export default Navbar;
