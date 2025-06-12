import NavigateIcon from "../../assets/Destinations/Navigation.png";

const DestinationCard = ({ image, title, price, plan }) => {
  return (
    <div className="relative max-w-80 rounded-4xl shadow-xl max-h-[457px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-t-4xl"
      />

      <div className="absolute bottom-0 left-0 right-0 pt-6 px-5 bg-white h-[130px] rounded-b-4xl">
        <div className="flex justify-between">
          <h2 className="poppins text-lg text-[#5E6282]">{title}</h2>
          <h2 className="poppins text-lg text-[#5E6282]">{price}</h2>
        </div>
        <h2 className="flex text-lg mt-3 items-center gap-4 text-[#5E6282] font-medium poppins">
          <img src={NavigateIcon} alt="Location" className="size-5" />
          {plan}
        </h2>
      </div>
    </div>
  );
};

export default DestinationCard;
