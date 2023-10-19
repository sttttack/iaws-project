import BenefitsCard from "../Card/BenefitsCard";

import Networking from "../../assets/Networking.png";
import Fist from "../../assets/Fist.png";
import Arrow from "../../assets/Arrow.png";
import Light from "../../assets/Light.png";
import Mind from "../../assets/Mind.png";

const MembershipBenefits = (props) => {
  return (
    <div className={`w-auto h-[858px] flex flex-col items-center mt-[200px]`}>
      <div className={`flex justify-center items-center flex-col`}>
        <h1 className="font-extrabold text-5xl text-center">
          Membership And Benefits
        </h1>
        <p className="text-center text-md font-light mt-[40px] w-[642px]">
          As a member of our association, you will gain access to a wide range
          of benefits and opportunities. These include:
        </p>
      </div>
      <div className={`flex gap-[80px] mt-[100px]`}>
        <div className={`flex flex-col gap-[40px]`}>
          <BenefitsCard
            image={Networking}
            title={`Networking`}
            description={`Connect with women surgeons from diverse specialties and geographical locations. `}
          />
          <BenefitsCard
            image={Mind}
            title={`Professional Development`}
            description={`Access educational resources, workshops, and conferences tailored to the needs of women surgeons. `}
          />
          <BenefitsCard
            image={Arrow}
            title={`Research and Collaboration`}
            description={`Engage in collaborative research projects and contribute to the advancement of surgical knowledge. `}
          />
        </div>
        <div className={`flex flex-col gap-[40px]`}>
          <BenefitsCard
            image={Light}
            title={`Networking`}
            description={`Connect with women surgeons from diverse specialties and geographical locations. `}
          />
          <BenefitsCard
            image={Fist}
            title={`Mentorship`}
            description={`Take advantage of mentorship programs designed to foster personal and professional growth. `}
          />
        </div>
      </div>
      <button
        className={`w-[240px] h-[54px] bg-black rounded-[40px] mt-[80px] text-white font-semibold text-base`}
      >
        Explore more benefits
      </button>
    </div>
  );
};

export default MembershipBenefits;
