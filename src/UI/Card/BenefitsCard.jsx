const BenefitsCard = ({ image, title, description }) => {
  return (
    <div className="flex items-center gap-10 bg-white w-[536px] h-[125px]">
      <img src={image} />
      <div className="p-6">
        <h5 className="mb-2 text-xl font-semibold leading-tight text-neutral-800 text-left">
          {title}
        </h5>
        <p className=" text-base text-neutral-600 text-left font-light w-[371px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitsCard;
