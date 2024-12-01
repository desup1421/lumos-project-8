import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import menu from "../assets/icons/menu.svg";
import menuLight from "../assets/icons/menuLight.svg"
import close from "../assets/icons/close.svg";
import { toggleTheme } from "../redux/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const {isDark} = useSelector(state => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav
      role="navigation"
      className={`flex flex-col tablet:flex-row justify-between items-center fixed bg-light dark:bg-dark z-50 top-0 left-0 w-full ${
        isOpen ? "h-screen" : "h-[72px]"
      }  p-[20px] tablet:h-[80px] desktop:h-[60px] transition-all duration-500 overflow-hidden lg:px-32`}
    >
      {/* NAV HEADER */}
      <div
        className={`flex ${
          isOpen && "invisible"
        } items-center justify-between w-full`}
      >
        <span className="font-bold text-[18px] text-dark dark:text-light">LumosBlog</span>
        {/* TOGGLE BUTTON */}
        <button onClick={() => setIsOpen(true)}>
          <img src={menu} className="w-[32px] block tablet:hidden dark:hidden" alt="menu icon" />
          <img src={menuLight} className="w-[32px] hidden dark:block tablet:dark:hidden" alt="menu icon" />
        </button>
      </div>

      {/* NAV BODY */}
      <div
        className={`${
          !isOpen && "invisible"
        } tablet:visible flex flex-col tablet:flex-row justify-between items-center gap-4`}
      >
        <ul className="flex flex-col tablet:flex-row items-center gap-4 text-dark dark:text-light">
          <li>
            <Link onClick={() => setIsOpen(false)} to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/newsletter">
              Newsletter
            </Link>
          </li>
        </ul>
        <div className="rounded-[29px] bg-dark dark:bg-light w-[96px] h-[40px] flex justify-around items-center border">
          <label className="border border-dark rounded-full cursor-pointer dark:cursor-default" htmlFor="light">
            <img className="w-[24px] h-[24px]" src={sun} alt="icon-sun" />
          </label>
          <input
            className="hidden"
            type="radio"
            name="theme"
            id="light"
            value="light"
            onChange={() => dispatch(toggleTheme())}
            checked = {isDark}
            aria-hidden
          />
          <label
            className="border rounded-full bg-dark dark:bg-light border-light dark:cursor-pointer"
            htmlFor="dark"
          >
            <img className="w-[24px] h-[24px]" src={moon} alt="icon-moon" />
          </label>
          <input
            className="hidden"
            type="radio"
            name="theme"
            id="dark"
            value="dark"
            checked = {!isDark}
            onChange={() => dispatch(toggleTheme())}
            aria-hidden
          />
        </div>
      </div>

      {/* NAV FOOTER */}
      <button
        onClick={() => setIsOpen(false)}
        className={`bg-dark rounded-full tablet:hidden`}
      >
        <img src={close} alt="icon-close" />
      </button>
    </nav>
  );
};

export default Navbar;
