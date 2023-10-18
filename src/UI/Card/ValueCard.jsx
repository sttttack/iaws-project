const ValueCard = ({ image, title, description, altTitle }) => {
  return (
    <div className="flex justify-center items-center flex-col rounded-[60px] bg-white w-[344px] h-[394px]">
      <img src={image} alt={altTitle} />
      <div className="p-6">
        <h5 className="mb-2 text-xl font-semibold leading-tight text-neutral-800 text-center">
          {title}
        </h5>
        <p className="mb-4 text-base font-light text-neutral-600 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
