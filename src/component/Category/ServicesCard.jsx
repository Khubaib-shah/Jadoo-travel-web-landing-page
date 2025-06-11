import { useFadeOnScroll } from "../../utils/useFade";

const ServicesCard = ({ imgSrc, imgAlt, title, description }) => {
  const [ref, isVisible] = useFadeOnScroll();

  return (
    <div
      ref={ref}
      className={`max-w-[267px] gap-4 flex justify-center items-center flex-col rounded-4xl p-4 bg-white hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={imgSrc} alt={imgAlt} className="w-24 h-24 object-contain" />
      <h3 className="text-xl font-bold sansation">{title}</h3>
      <p className="text-center text-base text-gray-600 poppins">
        {description}
      </p>
    </div>
  );
};

export default ServicesCard;
