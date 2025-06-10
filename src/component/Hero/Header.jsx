import Logo from "../../assets/Jadoo.png";
import navLinks from "../../data/navLinks";
import downArrow from "../../assets/left-arrow.png";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-6 max-w-7xl mx-auto w-full">
      {/* Logo */}
      <div className="relative z-10 w-[100.4px]">
        <img src={Logo} alt="Jadoo Logo" className="w-full h-auto" />
        <span className="bg-amber-500 absolute right-6 top-[14px] size-3 -z-10 rounded-full"></span>
        <span className="bg-amber-500 absolute right-1 top-3 size-4 -z-10 rounded-full"></span>
      </div>

      <nav className="hidden lg:flex flex-1 justify-center sansation items-center text-[#212832]">
        <ul className="flex gap-8 xl:gap-12 items-center z-10">
          {Object.entries(navLinks).map(([key, label], index) => (
            <li
              key={index}
              className="hover:text-[#5a7194]/40 transition-colors duration-200 font-bold text-lg"
            >
              <a href={`#${key}`} className="block py-2 px-1">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Buttons - Desktop */}
      <div className="hidden md:flex gap-4 lg:gap-6 items-center font-sans font-bold text-md z-10">
        <button className="hover:border hover:border-[#212632] px-4 py-2 rounded-md text-[#212632] cursor-pointer transition-colors duration-200">
          Login
        </button>
        <button className="border border-[#212632] hover:bg-[#212632] hover:text-white py-2 rounded-md px-4 text-[#212632] cursor-pointer transition-colors duration-200">
          Sign up
        </button>
        <button className="flex items-center gap-2 cursor-pointer hover:text-[#5a7194]/40 transition-colors duration-200">
          EN
          <img src={downArrow} alt="Down Arrow" className="size-4 -rotate-90" />
        </button>
      </div>

      {/* Mobile Navigation Toggle */}
      <MobileNav setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
