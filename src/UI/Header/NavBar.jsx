import LoginBtn from "../Shared/LoginBtn";
import SignUp from "../Shared/Signup";

import Group from "../../assets/Group.svg";

import Dropdown from "../Shared/Dropdown";

export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200 relative z-50">
      <div className="max-w-screen-xl mx-auto p-4">
        <ul className="font-normal flex justify-end items-center">
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-black text-sm"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <Dropdown Page={`About us`} />
          </li>
          <li>
            <Dropdown Page={`Membership`} />
          </li>
          <li>
            <Dropdown Page={`Education`} />
          </li>
          <div className={`ml-[32px] mr-[36px]`}>
            <img src={Group} />
          </div>
          <div className={`flex gap-4`}>
            <LoginBtn />
            <SignUp />
          </div>
        </ul>
      </div>
    </nav>
  );
}
