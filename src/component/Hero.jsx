import Header from "./Header";
import DecoreImg from "../assets/Decore.png";
import decoreImage1 from "../assets/TextDesign.png";
import Playbutton from "../assets/Polygon1.png";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={DecoreImg}
        alt="Background Image"
        className="absolute -top-20 -right-20 z-1"
      />
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border-2 border-[#412a25] rounded-lg bg-white shadow-lg relative z-20">
        {/* Content */}
        <div className="flex flex-col mt-20 justify-center items-start  ms-6">
          <h4 className="font-bold text-[18.39px] text-[#DF6951]">
            Best Destinations around the world
          </h4>

          <h1 className="relative text-8xl font-extrabold mt-4 text-[#181D4B] volkhov leading-20 tracking-tighter ">
            Travel, enjoy <br /> and live a new <br /> and full life
            <img
              src={decoreImage1}
              alt="Text Design"
              className="absolute top-[68px] -right-[84px] -z-10"
            />
          </h1>
          <p className="text-[#5E6282] text-[14.44px] mt-10 w-[430.33px] poppins">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          {/* Button */}
          <div className="mt-10 flex items-center gap-10">
            <button className="sansation bg-[#F1A501] text-white  px-6 py-4 rounded-xl cursor-pointer hover:bg-[#F1A501]/80 transition duration-300">
              Find out more
            </button>
            <button className="sansation text-[#686D77] cursor-pointer flex items-center">
              <span className="bg-[#DF6951] w-12 h-12 rounded-full me-2 justify-center items-center flex">
                <img src={Playbutton} alt="Play Button" />
              </span>
              Play Demo
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="z-30">akdhkas</div>
      </div>
    </div>
  );
};

export default Hero;
