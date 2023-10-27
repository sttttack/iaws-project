import Pic from "../../../public/bgcut.png";

import BecomeAMember from "../../UI/Shared/BecomeAMember";

const JoinUs = () => {
  return (
    <div
      className={`flex justify-center relative mb-[170px] bg-mission w-auto h-auto`}
    >
      <div
        className={`bg-no-repeat rounded-[60px] bg-gradient-to-r from-[#000000] relative z-50 h-[464px] w-[1152px]`}
      >
        <img
          src={Pic}
          className={`w-[1152px] h-full object-fit absolute mix-blend-overlay`}
        />

        <div className={`flex flex-col gap-9 pt-[64px] pl-[64px] relative`}>
          <h1 className={` text-white font-extrabold text-5xl`}>Join Us Now</h1>
          <p className={` text-white font-thin text-sm w-[594px]`}>
            We invite you to become a member of the International Association of
            Women Surgeons and be a part of our dynamic community. Together, we
            can empower women in surgery, inspire future generations, and make a
            lasting impact on the field of surgical medicine.
          </p>
          <p className={` text-white font-semibold text-xl w-[594px]`}>
            Join us today and let us support you on your professional journey as
            a woman surgeon.
          </p>
          <BecomeAMember withSVG={false} width={240} height={54} />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
