import "./App.css";
import Category from "./component/Category/Category";
import Hero from "./component/Hero/Hero";
import DecoreImg from "./assets/Decore.png";
import Destinations from "./component/Destinations/Destinations";
import BookATrip from "./component/BookATrip/BookATrip";
import Testimonials from "./component/Testimonials/Testimonials";
import Logos from "./component/Logos/Logos";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 bg-[#FFFFFF] ">
      <img
        src={DecoreImg}
        alt="Background Image"
        className="absolute top-0 right-0  z-1 w-[350px] md:w-[500px] max-w-none pointer-events-none"
      />
      <Hero />
      <Category />
      <Destinations />
      <BookATrip />
      <Testimonials />
      <Logos />
    </div>
  );
}

export default App;
