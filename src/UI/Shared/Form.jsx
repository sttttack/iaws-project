const Form = ({ step, count }) => {
  return (
    <div
      className={`w-[152px] h-[44px] border-2 rounded-[14px] gap-3 border-[#C85BF1] flex items-center justify-center`}
    >
      <div className="rounded-[100%] w-[20px] h-[20px] border-2 flex items-center justify-center">
        <p className={`text-[10px] font-bold`}>{count}</p>
      </div>

      <p className={`text-xs`}>{step}</p>
    </div>
  );
};

export default Form;
