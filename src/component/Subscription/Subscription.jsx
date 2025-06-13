import ShareIcon from "../../assets/share.png";
import decorationLines from "../../assets/decorationLines.png";
import decorationLines2 from "../../assets/decorationLines2.png";
import design from "../../assets/design.png";
import Mail from "./Mail";
import { useFadeOnScroll } from "../../utils/useFade";

const Subscription = () => {
  const [ref, isVisible] = useFadeOnScroll();

  return (
    <section
      ref={ref}
      className={`relative mx-auto h-auto md:h-[407px] mt-12 md:mt-24 rounded-tl-3xl md:rounded-tl-[200px] rounded-lg flex justify-center items-center flex-col text-center py-12 md:py-0 px-4 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-[#DFD7F9]/40`}
    >
      <div
        className="flex justify-center items-center pt-1 rounded-full size-12 md:size-[70px] absolute -top-6 md:-top-8 -right-6 md:-right-8 bg-gradient-to-r from-[#747DEF] to-[#5E3BE1] z-10 hover:scale-105 transition-transform cursor-pointer"
        aria-label="Share"
      >
        <img src={ShareIcon} alt="" className="w-6 md:w-auto" />
      </div>

      <img
        src={decorationLines}
        alt=""
        className="absolute right-0 z-0 h-[200px] md:h-[290px] opacity-10"
      />
      <img
        src={design}
        alt=""
        className="absolute -bottom-18 -right-25 hidden xl:block -z-1"
      />
      <img
        src={decorationLines2}
        alt=""
        className="absolute left-7 bottom-0 h-[200px] md:h-[290px] opacity-10 z-0"
      />

      <div className="relative z-10 w-full px-4">
        <h2 className="text-[#5E6282] text-xl sm:text-2xl md:text-3xl lg:text-[33px] font-semibold text-center max-w-[859px] mx-auto">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h2>

        <form className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-8 md:mt-16 w-full max-w-4xl mx-auto">
          <div className="flex bg-white rounded-2xl w-full md:w-[421px] h-14 md:h-[68px] ps-5 shadow-sm">
            <Mail />
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full h-full border-none outline-none font-medium text-[#39425D] placeholder:text-[#39425D]/60 pl-4 text-sm md:text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-[180px] h-14 md:h-[68px] rounded-lg font-semibold text-white text-sm md:text-[17px] bg-gradient-to-t from-[#FF946D] to-[#FF7D68] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#FF946D] transition-all cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
