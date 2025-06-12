import ShareIcon from "../../assets/share.png";
import decorationLines from "../../assets/decorationLines.png";
import decorationLines2 from "../../assets/decorationLines2.png";
import design from "../../assets/design.png";
import Mail from "./Mail";

const Subscription = () => {
  return (
    <section className="p-6' mx-auto relative bg-[#DFD7F9]/40 h-auto  md:h-[407px] mt-12 md:mt-24 rounded-tl-3xl md:rounded-tl-[200px] rounded-lg flex justify-center items-center flex-col text-center py-12 md:py-0 px-4">
      <div
        className="flex justify-center items-center pt-1 rounded-full size-12 md:size-[70px] absolute -top-6 md:-top-8 -right-3 md:-right-4 lg:-right-4 
      bg-gradient-to-r from-[#747DEF] to-[#5E3BE1] z-10"
      >
        <img
          src={ShareIcon}
          alt="Share"
          className="object-contain w-6 md:w-auto"
        />
      </div>
      <img
        src={decorationLines}
        alt="Lines"
        className="absolute right-0 z-0 h-[200px] md:h-[290.88px] opacity-10"
      />

      <div className="absolute left-0 bottom-0 w-full h-full overflow-hidden z-0">
        <img
          src={decorationLines2}
          alt="Lines"
          className="absolute left-7 -bottom-7 h-[200px] md:h-[290.88px] opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4">
        <h2 className="text-[#5E6282] text-xl sm:text-2xl md:text-3xl lg:text-[33px] font-semibold text-center max-w-[859px] mx-auto">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-8 md:mt-16 w-full max-w-4xl mx-auto">
          <div className="flex bg-white rounded-2xl w-full md:w-[421px] h-14 md:h-[68px] ps-5">
            <Mail />
            <input
              type="text"
              placeholder="Your email"
              className="w-full h-full border-none outline-none font-semibold text-[#39425D]/60 placeholder:text-[#39425D]/60 pl-4 text-sm md:text-base"
            />
          </div>

          <button className="w-full md:w-[180px] h-14 md:h-[68px] rounded-lg bg-amber-400 sansation font-semibold text-white text-sm md:text-[17px] bg-gradient-to-t from-[#FF946D] to-[#FF7D68] hover:opacity-90 transition-opacity cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
      <img
        src={design}
        alt="design"
        className="absolute hidden xl:block xl:-bottom-18 xl:-right-25 -z-1 "
      />
    </section>
  );
};

export default Subscription;
