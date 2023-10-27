const RegCard = ({ Image, Title }) => {
  return (
    <div className={`flex items-center justify-center flex-col`}>
      <div>{Image}</div>
      <h5 className="mt-[20px] text-xl font-medium leading-tight text-neutral-800 w-[139px] text-center">
        {Title}
      </h5>
    </div>
  );
};

export default RegCard;
