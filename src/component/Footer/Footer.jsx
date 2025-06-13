import facebookIcon from "../../assets/facebookicon.png";
import instagramIcon from "../../assets/instagram.png";
import xIcon from "../../assets/xicon.png";
import GooglePlay from "../../assets/Google Play.png";
import ApplePlay from "../../assets/Play Store.png";
import { useFadeOnScroll } from "../../utils/useFade";

const Footer = () => {
  const [ref, isVisible] = useFadeOnScroll();

  return (
    <footer
      ref={ref}
      className={`mt-24 px-6 md:px-12 lg:px-24 py-12 bg-white  transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-[#DFD7F9]/40`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <h2 className="text-4xl md:text-5xl font-bold text-[#181E4B]">
            Jadoo.
          </h2>
          <p className="text-sm md:text-[13px] font-medium text-[#5E6282] mt-6 max-w-[260px] leading-relaxed">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-2 mt-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-[#080809] mb-6">
              Company
            </h3>
            <ul className="space-y-2">
              {["About", "Careers", "Mobile"].map((item) => (
                <li key={item}>
                  <a
                    href="https://khubaib-portfolio-seven.vercel.app/"
                    className="text-[#5E6282] font-medium hover:text-[#FF7D68] transition-colors"
                    target="_blank"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold text-[#080809] mb-6">
              Contact
            </h3>
            <ul className="space-y-2">
              {["Help/FAQ", "Press", "Affiliates"].map((item) => (
                <li key={item}>
                  <a
                    href="https://khubaib-portfolio-seven.vercel.app/"
                    className="text-[#5E6282] font-medium hover:text-[#FF7D68] transition-colors"
                    target="_blank"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold text-[#080809] mb-6">
              More
            </h3>
            <ul className="space-y-2">
              {["Airlinefess", "Airline", "Low fare tips"].map((item) => (
                <li key={item}>
                  <a
                    href="https://khubaib-portfolio-seven.vercel.app/"
                    className="text-[#5E6282] font-medium hover:text-[#FF7D68] transition-colors"
                    target="_blank"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex gap-4 mb-8">
            <a
              href="https://khubaib-portfolio-seven.vercel.app/"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Facebook"
              target="_blank"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-4 h-4 object-contain"
              />
            </a>

            <a
              href="https://khubaib-portfolio-seven.vercel.app/"
              className="p-3 rounded-full shadow-lg hover:shadow-lg transition-shadow rotate-180"
              style={{
                background:
                  "conic-gradient(#B8D2F1, #F289AA, #C68BF0, #D164DA, #C963E8, #BFC2E8, #FFC999, #D0D8C9, #BAD0F1, #CED8CB, #FFFFFF)",
              }}
              aria-label="Instagram"
              target="_blank"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-4 h-4 object-contain rotate-180"
              />
            </a>

            <a
              href="https://khubaib-portfolio-seven.vercel.app/"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Twitter"
              target="_blank"
            >
              <img src={xIcon} alt="" className="w-4 h-4 object-contain" />
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#5E6282] mb-4">
              Discover our app
            </h3>
            <div className="flex gap-3">
              <a
                href="https://khubaib-portfolio-seven.vercel.app/"
                aria-label="Download on Google Play"
                target="_blank"
              >
                <img src={GooglePlay} alt="Google Play" className="w-auto" />
              </a>
              <a
                href="https://khubaib-portfolio-seven.vercel.app/"
                aria-label="Download on App Store"
                target="_blank"
              >
                <img src={ApplePlay} alt="App Store" className="w-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#E5E5E5] text-center text-[#5E6282]">
        <p>© {new Date().getFullYear()} Jadoo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
