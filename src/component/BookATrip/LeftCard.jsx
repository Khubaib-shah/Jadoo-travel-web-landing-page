const LeftCard = ({ image, title, description }) => {
  return (
    <div className={`flex gap-5 my-3 items-center`}>
      <img src={image} alt={title} />
      <div>
        <h4 className="font-bold text-[#5E6282] Poppins">{title}</h4>
        <p className="text-[#5E6282] Poppins">{description}</p>
      </div>
    </div>
  );
};

export default LeftCard;
