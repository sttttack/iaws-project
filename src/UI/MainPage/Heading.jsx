import BecomeAMember from "../Shared/BecomeAMember";
import MoreAboutUs from "../Shared/MoreAboutUs";

const Heading = (props) => {
  return (
    <div className="w-auto h-[833px] relative bg-hero-pattern bg-no-repeat">
      <div className="absolute inset-0 bg-topgradient z-0"></div>
      <div className="flex h-[100vh] items-center justify-start flex-col relative mt-[168px] gap-[40px]">
        <div className="w-[756px] flex gap-[36px] flex-col mt-[-90px]">
          <h1 className="font-extrabold text-5xl text-center">
            Supporting Women Surgeons, Transforming Healthcare
          </h1>
          <p className="text-center text-base font-light">
            At the International Association of Women Surgeons, we recognize the
            importance of creating a supportive community for women in surgery.
          </p>
        </div>
        <div className="flex gap-5">
          <MoreAboutUs />
          <BecomeAMember withSVG={true} width={247} height={54} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
