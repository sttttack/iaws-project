import { NavLink } from "react-router-dom";

export default function Signup() {
  return (
    <NavLink to="/signup">
      <button
        className={`text-white text-xs font-semibold w-[78px] h-[36px] border-solid bg-black rounded-lg`}
      >
        Sign Up
      </button>
    </NavLink>
  );
}
