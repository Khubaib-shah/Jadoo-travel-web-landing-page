import greece from "../../assets/Booking/Greece.jpg";
import { useFadeOnScroll } from "../../utils/useFade";
import LeftCard from "./LeftCard";
import bookingData from "../../data/booking";
import leaf from "../../assets/Booking/leaf.png";
import map from "../../assets/Booking/map.png";
import send from "../../assets/Booking/send.png";
import building from "../../assets/Booking/building.png";
import heart from "../../assets/Booking/heart.png";
import rome from "../../assets/Booking/image.png";

const BookATrip = () => {
  const [ref, isVisible] = useFadeOnScroll();
  return (
    <div
      ref={ref}
      className={`mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8 lg:px-10 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-white`}
    >
      <div className="lg:pl-4 xl:pl-8">
        <h3 className="Poppins text-base sm:text-lg text-[#5E6282] font-semibold">
          Easy and Fast
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold volkhov capitalize leading-tight sm:leading-normal mt-2">
          Book your next trip in 3 easy steps
        </h2>
        <div className="flex flex-col gap-4 sm:gap-6 mt-6 max-w-[395px]">
          {bookingData.map((card) => (
            <LeftCard
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end lg:items-end">
        <div
          className="w-full sm:w-[350px] md:w-[370px] flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-3xl relative"
          style={{
            boxShadow: "60px -40px 70px -6px rgba(89, 177, 230, 0.30)",
            WebkitBoxShadow: "76px -54px 119px -6px rgba(89, 177, 230, 0.45)",
            MozBoxShadow: "76px -54px 119px -6px rgba(89, 177, 230, 0.45)",
          }}
        >
          <img src={greece} alt="greece" className="w-full h-auto rounded-lg" />

          <h2 className="font-medium text-base sm:text-lg tracking-wide">
            Trip To Greece
          </h2>

          <h3 className="text-[#84829A] font-medium text-sm sm:text-base">
            14-29 June | <span className="ps-2">by Robbin joseph</span>
          </h3>

          <div className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2">
            <p className="p-2 sm:p-3 bg-[#84829A]/30 rounded-full">
              <img src={leaf} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            </p>
            <p className="p-2 sm:p-3 bg-[#84829A]/30 rounded-full">
              <img src={map} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            </p>
            <p className="p-2 sm:p-3 bg-[#84829A]/30 rounded-full">
              <img src={send} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            </p>
          </div>
          <div className="flex font-medium text-[#84829A] text-sm sm:text-base items-center justify-between">
            <p className="flex gap-2 sm:gap-3.5 items-center">
              <img src={building} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>24 people going</span>
            </p>
            <img src={heart} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          <div className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[90px] sm:h-[110px] md:h-[120px] flex absolute bg-white bottom-8 sm:bottom-10 -right-8 sm:-right-8 md:-right-6 lg:-right-13 shadow-xl rounded-xl p-3 sm:p-4">
            <img
              src={rome}
              alt="rome"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover mr-2 sm:mr-3"
            />

            <div className="flex-1">
              <h3 className="text-[#84829A] font-medium text-xs">Ongoing</h3>
              <h2 className="font-medium text-sm sm:text-base md:text-lg tracking-wide mt-0.5 sm:mt-1">
                Trip To Rome
              </h2>
              <p className="text-xs sm:text-sm text-[#84829A] mt-0.5 sm:mt-1">
                <span className="font-medium text-[#8A79DF]">40%</span>{" "}
                completed
              </p>

              <div className="w-full rounded-full h-1.5 sm:h-2 bg-[#f4efef] mt-1 sm:mt-2 overflow-hidden">
                <div className="bg-[#8A79DF] h-full w-[40%] rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookATrip;
