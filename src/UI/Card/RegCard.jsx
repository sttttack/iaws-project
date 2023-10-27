const RegCard = ({ Image, Title }) => {
  return (
    <div className={`flex items-center justify-center flex-col`}>
      <div>{Image}</div>
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 text-left w-[139px] text-center">
        {Title}
      </h5>
    </div>
  );
};

export default RegCard;
