import BecomeAMember from "../Shared/BecomeAMember";

const OurMission = () => {
  return (
    <div className="relative bg-hero-pattern bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-gradient"></div>
      <div className="flex h-[100vh] items-center justify-start flex-col relative mt-[168px] gap-[40px]">
        <div className="w-[756px] flex flex-col mt-[108px] text-white">
          <h1 className="font-extrabold text-5xl text-center">Our Mission</h1>
          <p className="text-center text-xl font-semibold mt-[40px]">
            At the International Association of Women Surgeons, we recognize the
            importance of creating a supportive community for women in surgery.
          </p>
          <p className="text-center text-base font-light mt-9">
            Our mission is to empower women surgeons by providing a platform for
            networking, mentorship, and professional development. We strive to
            break down barriers and overcome the challenges faced by women in
            the surgical profession.
          </p>
        </div>
        <BecomeAMember withSVG={false} width={240} height={54} />
      </div>
    </div>
  );
};

export default OurMission;
