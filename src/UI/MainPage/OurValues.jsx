import ValueCard from "../Card/ValueCard";

import Convo from "../../assets/convo.png";
import Strike from "../../assets/strike.png";
import Heart from "../../assets/heart.png";
import Diamond from "../../assets/diamond.png";
import Human from "../../assets/human.png";

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
            image={Convo}
            altTitle={`Collaboration`}
            title={`Collaboration`}
            description={`We actively encourage networking, knowledge-sharing, and mentorship to enhance professional growth of women in surgery.`}
          />
          <ValueCard
            image={Strike}
            altTitle={`Empowerment`}
            title={`Empowerment`}
            description={`We promote self-confidence, leadership development, and the cultivation of essential skills to drive positive change in the field of surgery.`}
          />
          <ValueCard
            image={Heart}
            altTitle={`Equality`}
            title={`Equality`}
            description={`We believe in equal opportunities and recognition for all women surgeons, promoting fairness and inclusivity in all aspects of the surgical profession.`}
          />
        </div>
        <div
          className={`flex flex-row justify-center items-center gap-[60px] mt-[60px] mb-[180px]`}
        >
          <ValueCard
            image={Diamond}
            altTitle={`Excellence`}
            title={`Excellence`}
            description={`We inspire and recognize outstanding achievements among women surgeons, promoting a culture of excellence and improvement.`}
          />
          <ValueCard
            image={Human}
            altTitle={`Diversity`}
            title={`Diversity`}
            description={`We champion inclusivity across all backgrounds, cultures, and perspectives, fostering an environment that values and respects individual differences.`}
          />
        </div>
      </div>
    </div>
  );
};

export default OurValues;
