import Logo from "../assets/Jadoo.png";
import navLinks from "../utils/navLinks";
import downArrow from "../assets/left-arrow.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-transparent">
      {/* Logo */}
      <div className="relative z-1">
        <img src={Logo} alt="Jadoo Logo" />
        <span className="bg-amber-500 absolute right-7 top-4  w-4 h-4 -z-1 rounded-full"></span>
        <span className="bg-amber-500 absolute right-1 top-3 w-4 h-5 -z-1 rounded-full"></span>
      </div>

      {/* Links */}
      <nav className="flex flex-1 justify-end   sansation items-center text-[#212832] mr-24">
        <ul className="flex md:gap-20 items-center">
          {Object.entries(navLinks).map((value, index) => {
            console.log(value);

            return (
              <li
                key={index}
                className="hover:text-[#5a7194]/40 transition-colors font-bold text-lg"
              >
                <a href={`#${value[0].toLowerCase()}`}>{value[1]}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Buttons */}
      <div className="flex md:gap-8 items-center font-sans font-bold text-md">
        <button className="hover:border border-[#212632] px-5 py-2 rounded-md text-[#212632] cursor-pointer">
          Login
        </button>
        <button className="border border-[#212632] px-5 py-2 rounded-md text-[#212632] cursor-pointer">
          Sign up
        </button>
        <button className="flex items-center gap-2 cursor-pointer">
          EN
          <img
            src={downArrow}
            alt="Down Arrow"
            className="size-4 -rotate-90 "
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
