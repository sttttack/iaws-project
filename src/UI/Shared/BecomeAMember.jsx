// Button width needs to be changed

const Member = ({ withSVG, width, height }) => {
  return (
    <button
      className={`w-[247px] h-[${height}px] bg-[#C85BF1] rounded-[40px] text-white flex justify-center items-center gap-[10px] z-10`}
    >
      Become a member
      {withSVG && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
        >
          <path
            d="M17.731 6.53033C18.0239 6.23744 18.0239 5.76256 17.731 5.46967L12.958 0.696699C12.6651 0.403806 12.1903 0.403806 11.8974 0.696699C11.6045 0.989593 11.6045 1.46447 11.8974 1.75736L16.14 6L11.8974 10.2426C11.6045 10.5355 11.6045 11.0104 11.8974 11.3033C12.1903 11.5962 12.6651 11.5962 12.958 11.3033L17.731 6.53033ZM0 6.75H17.2007V5.25H0V6.75Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
};

export default Member;
