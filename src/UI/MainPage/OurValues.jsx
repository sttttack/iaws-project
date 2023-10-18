import ValueCard from "../Card/ValueCard";

// import Heart from "../../assets/heart.png";

const OurValues = () => {
  return (
    <div
      className={`bg-mission w-full h-auto flex justify-start items-center flex-col mt-[147px]`}
    >
      <div>
        <h1 className={`text-center font-extrabold text-5xl`}>Our Values</h1>
        <p className={`text-center font-light text-base w-[968px] mt-[40px]`}>
          Through our collaborative efforts, we aim to promote gender equality,
          diversity, and inclusion in the field of surgery. We believe that by
          connecting women surgeons from different backgrounds and experiences,
          we can foster innovation, enhance patient care, and drive positive
          change in healthcare systems worldwide.
        </p>
      </div>
      <div className={`mt-[100px]`}>
        <div className={`flex flex-row gap-[60px]`}>
          <ValueCard
            // image={Heart}
            altTitle={`Collaboration`}
            title={`Collaboration`}
            description={`We actively encourage networking, knowledge-sharing, and mentorship to enhance professional growth of women in surgery.`}
          />
          <ValueCard
            // image={Heart}
            altTitle={`Collaboration`}
            title={`Collaboration`}
            description={`We actively encourage networking, knowledge-sharing, and mentorship to enhance professional growth of women in surgery.`}
          />
          <ValueCard
            // image={Heart}
            altTitle={`Collaboration`}
            title={`Collaboration`}
            description={`We actively encourage networking, knowledge-sharing, and mentorship to enhance professional growth of women in surgery.`}
          />
        </div>
        <div
          className={`flex flex-row justify-center items-center gap-[60px] mt-[60px] mb-[180px]`}
        >
          <ValueCard
            // image={Heart}
            altTitle={`Collaboration`}
            title={`Collaboration`}
            description={`We actively encourage networking, knowledge-sharing, and mentorship to enhance professional growth of women in surgery.`}
          />
          <ValueCard
            // image={Heart}
            altTitle={`Collaboration`}
            title={`Collaboration`}
            description={`We actively encourage networking, knowledge-sharing, and mentorship to enhance professional growth of women in surgery.`}
          />
        </div>
      </div>
    </div>
  );
};

export default OurValues;
