import { useFadeOnScroll } from "../../utils/useFade";

const SectionHeading = ({ title }) => {
  const [ref, isVisible] = useFadeOnScroll();

  return (
    <h2
      ref={ref}
      className={`text-[#5E6282] text-[18px] uppercase text-center font-semibold py-3.5 md:text-[32px] md:leading-[40px] poppins transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } mt-24 z-100 bg-white}`}
    >
      {title}
    </h2>
  );
};

export default SectionHeading;
