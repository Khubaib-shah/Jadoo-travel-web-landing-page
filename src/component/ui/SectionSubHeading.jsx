import { useFadeOnScroll } from "../../utils/useFade";

const SectionSubHeading = ({ title }) => {
  const [ref, isVisible] = useFadeOnScroll();
  return (
    <h3
      ref={ref}
      className={`
text-2xl md:text-[40px] lg:text-[50px] font-bold volkhov text-[#14183E] text-center transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }  bg-white}`}
    >
      {title}
    </h3>
  );
};

export default SectionSubHeading;
