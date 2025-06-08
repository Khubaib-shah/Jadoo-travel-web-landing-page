import Header from "./Header";
import DecoreImg from "../../assets/Decore.png";
import decoreImage1 from "../../assets/TextDesign.png";
import Playbutton from "../../assets/Polygon1.png";
import HeroImage from "../../assets/Traveller.png";
import Plane from "../../assets/plane.png";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      <img
        src={DecoreImg}
        alt="Background Image"
        className="fixed top-0 right-0 z-0 w-[500px] max-w-none pointer-events-none"
      />

      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  rounded-lg h-full relative z-20">
        {/* Content */}
        <div className="flex flex-col justify-center items-start ms-6 mt-24">
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
        <div className="relative mt-10 z-10 w-full h-full">
          {/* Girl */}
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-auto h-full object-contain scale-[1.3] transition-transform duration-500 -ms-14 mt-6"
          />

          {/* Plane */}
          <img
            src={Plane}
            alt="Plane"
            className="absolute -top-5 left-10 w-[200px] h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
