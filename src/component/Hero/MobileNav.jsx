import navLinks from "../../data/navLinks";
import downArrow from "../../assets/left-arrow.png";

const MobileNav = ({ setToggleMenu, toggleMenu }) => {
  return (
    <div className="lg:hidden flex items-center cursor-pointer z-50 relative text-[#e5d4b8] font-bold">
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="flex items-center gap-1 focus:outline-none"
        aria-expanded={toggleMenu}
        aria-label={toggleMenu ? "Close menu" : "Open menu"}
      >
        <img
          src={downArrow}
          alt=""
          className={`size-6 transition-transform duration-300 ${
            toggleMenu ? "-rotate-90" : "rotate-0"
          }`}
        />
        Menu
      </button>

      <nav className="flex xl:hidden sansation items-center text-[#212832]">
        <ul
          className={`flex flex-col gap-10 absolute top-12 right-0 backdrop-blur-sm px-6 py-4 bg-[#FFF1DA]/20 rounded-lg shadow-lg ${
            toggleMenu
              ? "opacity-100 scale-100 translate-y-0 visible"
              : "opacity-0 scale-95 -translate-y-4 invisible"
          } transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]`}
        >
          {Object.entries(navLinks).map(([key, label], index) => (
            <li
              key={index}
              className="hover:text-[#5a7194]/40 transition-colors duration-200 font-bold text-lg border-b-1"
            >
              <a
                href={`#${key}`}
                onClick={() => setToggleMenu(false)}
                className="block py-1"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
