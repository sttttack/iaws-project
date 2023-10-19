import Social1 from "../../assets/Social1.svg";
import Social2 from "../../assets/Social2.svg";
import Social3 from "../../assets/Social3.svg";
import Social4 from "../../assets/Social4.svg";
import Social5 from "../../assets/Social5.svg";

import LoginBtn from "../Shared/LoginBtn";
import Signup from "../Shared/Signup";

const Footer = () => {
  return (
    <footer className=" text-black p-4 h-[323px] border-t-[0.5px]	">
      <div className="container mx-auto text-center flex flex-row justify-between py-[64px]">
        <div className={`w-[429px] h-[129px] flex gap-10 flex-col`}>
          <p className={`font-md font-light text-left`}>
            At the International Association of Women Surgeons, we recognize the
            importance of creating a supportive community for women in surgery.
          </p>
          <div className={`flex flex-row items-center justify-start gap-10`}>
            <img src={Social4} className={`cursor-pointer`} />
            <img src={Social5} className={`cursor-pointer`} />
            <img src={Social1} className={`cursor-pointer`} />
            <img src={Social2} className={`cursor-pointer`} />
            <img src={Social3} className={`cursor-pointer`} />
          </div>
        </div>
        <div className={`flex justify-end gap-10 text-left`}>
          <div>
            <h1 className={`font-semibold mb-5`}>Resources</h1>
            <h5 className={`font-light mb-4`}>Webinars</h5>
            <h5 className={`font-light mb-4`}>Courses</h5>
            <h5 className={`font-light mb-4`}>Help Center</h5>
            <h5 className={`font-light mb-4`}>FAQ</h5>
            <h5 className={`font-light`}>Conditions</h5>
          </div>
          <div>
            <h1 className={`font-semibold mb-5`}>About us</h1>
            <h5 className={`font-light mb-4`}>Who We Are</h5>
            <h5 className={`font-light`}>Founder</h5>
          </div>
          <div>
            <h1 className={`font-semibold mb-5`}>Membership</h1>
            <h5 className={`font-light mb-4`}>Benefits</h5>
            <h5 className={`font-light`}>Become a member</h5>
          </div>
          <div className={`flex gap-4`}>
            <LoginBtn />
            <Signup />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
