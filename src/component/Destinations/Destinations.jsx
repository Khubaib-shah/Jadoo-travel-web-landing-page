import SectionHeading from "../ui/SectionHeading";
import SectionSubHeading from "../ui/SectionSubHeading";
import DestinationCard from "./DestinationCard";
import destination from "../../data/destination.js";
import { useFadeOnScroll } from "../../utils/useFade.js";
const Destinations = () => {
  const [ref, isVisible] = useFadeOnScroll();
  return (
    <section
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out mt-24 ${
        isVisible ? "opacity-100" : "opacity-0"
      } `}
    >
      <SectionHeading title="Destinations" />
      <SectionSubHeading title="Top Destinations" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 place-items-center">
        {destination.map((destination) => (
          <DestinationCard
            key={destination.id}
            image={destination.image}
            title={destination.title}
            price={destination.price}
            plan={destination.plan}
          />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
