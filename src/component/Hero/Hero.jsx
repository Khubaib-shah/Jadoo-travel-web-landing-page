import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import decoreImage1 from "../../assets/TextDesign.png";
import Playbutton from "../../assets/Polygon1.png";
import HeroImage from "../../assets/Traveller.png";
import Plane from "../../assets/plane.png";

const Hero = () => {
  const [animatedText, setAnimatedText] = useState("");
  const [showHeading, setShowHeading] = useState(false);
  const h4Text = "Best Destinations around the world";
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }

    let i = 0;
    const typeWriter = () => {
      if (i < h4Text.length) {
        setAnimatedText(h4Text.substring(0, i + 1));
        i++;
        animationRef.current = setTimeout(typeWriter, 30);
      } else {
        setShowHeading(true);
      }
    };

    typeWriter();

    return () => {
      clearTimeout(animationRef.current);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden pb-6">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg h-full relative z-20">
        {/* Content */}
        <div className="flex flex-col justify-center items-start ms-6 md:mt-14 lg:mt-24 mt-10">
          <h4 className="font-bold text-[18.39px] md:text-[16px] text-[#DF6951] tracking-wider min-h-[28px]">
            {animatedText}
            <span className="animate-pulse">|</span>
          </h4>

          <h1
            className={`relative text-[#181D4B] volkhov text-[55px] tracking-tight md:text-[55px] lg:text-[80px] lg:tracking-tighter font-extrabold mt-8 leading-15 md:leading-15 lg:leading-20 md:tracking-tight transition-opacity duration-1000 ${
              showHeading ? "opacity-100" : "opacity-0"
            }`}
          >
            Travel, enjoy <br /> and live a new <br /> and full life
            <img
              src={decoreImage1}
              alt="Text Design"
              className="absolute w-[280px] md:w-[250px] lg:w-[300px] top-[46px] md:top-[46px] -right-[75px] lg:top-16 md:-right-16 lg:-right-18 -z-10"
            />
          </h1>

          <p
            className={`text-[#5E6282] text-[14.44px] mt-10 xl:w-[430.33px]  lg:w-[400.33px] poppins transition-opacity duration-1000 delay-500 ${
              showHeading ? "opacity-100" : "opacity-0"
            }`}
          >
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          {/* Button */}
          <div
            className={`mt-10 flex items-center gap-10 transition-opacity duration-1000 delay-700 ${
              showHeading ? "opacity-100" : "opacity-0"
            }`}
          >
            <button className="sansation bg-[#F1A501] text-white px-6 py-4 rounded-xl cursor-pointer hover:bg-[#F1A501]/80 transition duration-300">
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
        <div className="hidden md:flex relative mt-10 z-10 w-full h-full">
          {/* Girl */}
          <img
            src={HeroImage}
            alt="Hero Image"
            className={`w-auto h-full object-contain scale-[1.4] md:scale-[1.5] lg:scale-[1.3] xl:scale-105 -ms-14 mt-6  transition-opacity duration-400 
              ${showHeading ? "opacity-100" : "opacity-0"}`}
          />

          {/* Plane */}
          <img
            src={Plane}
            alt="Plane"
            className={`absolute top-0 left-0 md:top-10  lg:-top-5 w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] transition-opacity duration-400 
              ${showHeading ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
