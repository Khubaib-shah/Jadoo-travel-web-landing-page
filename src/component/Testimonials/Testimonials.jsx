import { useState } from "react";
import { useFadeOnScroll } from "../../utils/useFade";

import person1 from "../../assets/Testimonials/person1.png";
import person2 from "../../assets/Testimonials/person2.jpg";
import person3 from "../../assets/Testimonials/person3.avif";

const Testimonials = () => {
  const [ref, isVisible] = useFadeOnScroll();
  const [cardNumber, setCardNumber] = useState(0);

  const testimonials = [
    {
      text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.“",
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      image: person1,
    },
    {
      text: "“Amid the garden walks and shaded breeze, their service delighted every guest. Surely none expected such ease or warmth. All felt welcomed and cared for.“",
      name: "Jane Doe",
      location: "New York, USA",
      image: person2,
    },
    {
      text: "“The journey began with questions, yet each step felt guided and clear. Their attention spoke volumes, and in the end, all doubts quietly faded away.“",
      name: "John Smith",
      location: "London, UK",
      image: person3,
    },
  ];

  return (
    <section
      ref={ref}
      className={`mt-28 grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-white`}
    >
      <div className="lg:pl-4 xl:pl-8 w-full md:max-w-[429px]">
        <h3 className="Poppins text-base sm:text-lg text-[#5E6282] font-semibold">
          Testimonials
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold volkhov capitalize leading-tight sm:leading-normal mt-2">
          What people say about Us.
        </h2>
        <div className="flex justify-center gap-5 sm:gap-6 my-20 w-full md:max-w-[395px]">
          {Array(3)
            .fill()
            .map((_, index) => (
              <button
                key={index}
                onClick={() => setCardNumber(index)}
                className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                  cardNumber === index ? "bg-[#5E6282]" : "bg-[#E5E5E5]"
                }`}
              ></button>
            ))}
        </div>
      </div>

      <div className="relative w-full max-w-[541px] mx-auto">
        <div className="w-full rounded-3xl h-[200px] sm:h-[245px] md:h-[279px] relative bg-white Poppins ">
          <img
            src={testimonials[cardNumber].image}
            alt="person"
            className="size-[50px] sm:size-[68px] object-cover rounded-full scale-105 absolute z-10 left-0 sm:left-6 md:-left-3 lg:-left-5 top-0 sm:top-1 transition-all duration-500 ease-in-out shadow-lg"
          />

          <div
            key={`main-${cardNumber}`}
            className="w-full max-w-[504px] h-[160px] sm:h-[200px] md:h-[245px] absolute p-4 sm:p-6 md:p-9 bg-white shadow-lg sm:shadow-xl md:shadow-2xl z-9 rounded-2xl tracking-wide bottom-0 right-0 left-0 mx-auto transition-opacity duration-500 ease-in-out"
          >
            <div className="h-full flex flex-col justify-between">
              <p className="text-[#5E6282] text-sm sm:text-base font-medium">
                {testimonials[cardNumber].text}
              </p>
              <div>
                <h2 className="text-[#5E6282] font-bold text-base sm:text-lg mt-2 sm:mt-4 md:mt-6">
                  {testimonials[cardNumber].name}
                </h2>
                <p className="text-[#5E6282] text-xs sm:text-sm font-medium mt-1">
                  {testimonials[cardNumber].location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          key={`bg-${cardNumber}`}
          className="w-[90%] sm:w-[95%] max-w-[504px] h-[140px] sm:h-[160px] md:h-[200px] absolute bg-[#F7F7F7] -bottom-5 sm:-bottom-16 md:-bottom-18 lg:bottom-0 -right-3 sm:-right-2 md:-right-5 rounded-2xl tracking-wide px-4 sm:px-6 md:px-9 pt-2 shadow-md sm:shadow-lg transition-opacity duration-500 ease-in-out"
        >
          <p className="text-[#5E6282] text-xs sm:text-sm md:text-base font-medium">
            {testimonials[(cardNumber + 1) % testimonials.length].text}
          </p>
          <h2 className="text-[#5E6282] font-bold text-sm sm:text-base md:text-lg mt-4 sm:mt-6 md:mt-9">
            {testimonials[(cardNumber + 1) % testimonials.length].name}
          </h2>
          <p className="text-[#5E6282] text-xs sm:text-sm font-medium mt-1 sm:mt-2">
            {testimonials[(cardNumber + 1) % testimonials.length].location}
          </p>
        </div>

        <div className="hidden sm:flex absolute right-8 md:-right-10 lg:-right-10 top-1/2 transform -translate-y-1/2 flex-col gap-4 md:gap-6">
          <button
            onClick={() =>
              setCardNumber((prev) =>
                prev > 0 ? prev - 1 : testimonials.length - 1
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6 text-[#BCB7C2] rotate-180 cursor-pointer hover:text-[#5E6282] transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <button
            onClick={() =>
              setCardNumber((prev) =>
                prev < testimonials.length - 1 ? prev + 1 : 0
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6 text-[#5E6282] cursor-pointer hover:text-[#BCB7C2] transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dots - Only show on small screens */}
        <div className="sm:hidden flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCardNumber(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                cardNumber === index ? "bg-[#5E6282]" : "bg-[#E5E5E5]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
