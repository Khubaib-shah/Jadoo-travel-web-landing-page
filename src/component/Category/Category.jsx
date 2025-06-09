import { useFadeOnScroll } from "../../utils/useFade";
import SectionHeading from "../ui/SectionHeading";
import SectionSubHeading from "../ui/SectionSubHeading";
import ServicesCard from "./ServicesCard";
import CategoryData from "../../data/category.js";

const Category = () => {
  const [ref, isVisible] = useFadeOnScroll();

  return (
    <div>
      <SectionHeading title="category" />
      <SectionSubHeading title="We Offer Best Services" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2S lg:grid-cols-4 gap-6 mt-8 place-items-center">
        {CategoryData.map((category, index) => (
          <ServicesCard
            key={category.id}
            imgSrc={category.image}
            imgAlt={category.title}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
