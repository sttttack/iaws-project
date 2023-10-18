const Card = ({ image, title, description }) => {
  return (
    <div className=" bg-white w-[266px] h-[399px]">
      <a href="#!">
        <img src={image} style={{ borderRadius: "264px" }} />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 text-center">
          {title}
        </h5>
        <p className=" text-base text-neutral-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
