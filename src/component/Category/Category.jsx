import SectionHeading from "../ui/SectionHeading";
import SectionSubHeading from "../ui/SectionSubHeading";
import ServicesCard from "./ServicesCard";
import CategoryData from "../../data/category.js";
import design from "../../assets/design.png";

const Category = () => {
  return (
    <div className=" mt-24 relative">
      <img src={design} alt="design" className="absolute top-0 -right-10" />

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
