import Logo from "../../assets/jadoo.png";
import navLinks from "../../utils/navLinks";
import downArrow from "../../assets/left-arrow.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-6">
      {/* Logo */}
      <div className="relative z-1 w-[100.4px]">
        <img src={Logo} alt="Jadoo Logo" />
        <span className="bg-amber-500 absolute right-6 top-[14px] size-3 -z-1 rounded-full"></span>
        <span className="bg-amber-500 absolute right-1 top-3 size-4 -z-1 rounded-full"></span>
      </div>

      {/* Links */}
      <nav className="flex flex-1 justify-end sansation items-center text-[#212832] mr-24">
        <ul className="flex md:gap-20 items-center z-2">
          {Object.entries(navLinks).map(([key, label], index) => (
            <li
              key={index}
              className="hover:text-[#5a7194]/40 transition-colors font-bold text-lg"
            >
              <a href={`#${key}`}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Buttons */}
      <div className="flex md:gap-8 items-center font-sans font-bold text-md z-2">
        <button className="hover:border border-[#212632] px-5 py-2 rounded-md text-[#212632] cursor-pointer">
          Login
        </button>
        <button className="border border-[#212632] px-5 py-2 rounded-md text-[#212632] cursor-pointer">
          Sign up
        </button>
        <button className="flex items-center gap-2 cursor-pointer">
          EN
          <img src={downArrow} alt="Down Arrow" className="size-4 -rotate-90" />
        </button>
      </div>
    </header>
  );
};

export default Header;
