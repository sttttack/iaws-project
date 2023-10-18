import LoginBtn from "../Shared/LoginBtn";
import SignUp from "../Shared/Signup";

import Group from "../../assets/Group.svg";
import Polygon from "../../assets/Polygon.svg";

export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl mx-auto p-4">
        <ul className="font-normal flex justify-end items-center">
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-black"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <a href="#" className="block py-2 pl-3 pr-4 text-black">
                About us
              </a>
              <img src={Polygon} />
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <a href="#" className="block py-2 pl-3 pr-4 text-black">
                Membership
              </a>
              <img src={Polygon} />
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <a href="#" className="block py-2 pl-3 pr-4 text-black">
                Education
              </a>
              <img src={Polygon} />
            </div>
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
