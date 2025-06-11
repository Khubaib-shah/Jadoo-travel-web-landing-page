import { useFadeOnScroll } from "../../utils/useFade";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";

const Logos = () => {
  const [ref, isVisible] = useFadeOnScroll();

  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section
      ref={ref}
      className={` mt-20 sm:mt-32 flex flex-wrap justify-around gap-4 md:justify-between items-center px-4 sm:px-6  transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-white`}
    >
      {logos.map((logo, index) => (
        <div
          key={index}
          className="w-[160px] sm:w-[100px] md:w-[120px] lg:w-[180px] h-[60px] sm:h-[70px] md:h-[86px] flex items-center justify-center p-2 rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <img
            src={logo}
            alt={`company logo ${index + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </section>
  );
};

export default Logos;
