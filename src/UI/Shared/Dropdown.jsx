import { useState, useRef, useEffect } from "react";

const Dropdown = ({ Page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeTab = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeTab();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="inline-block  text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-normal text-black hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup={isOpen}
          onClick={toggleMenu}
        >
          {Page}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
          >
            <path
              d="M4.32435 4.75057C4.1647 4.9718 3.8353 4.9718 3.67565 4.75057L0.993508 1.03409C0.802588 0.769547 0.991619 0.400011 1.31786 0.400011L6.68214 0.400012C7.00838 0.400012 7.19741 0.769548 7.00649 1.03409L4.32435 4.75057Z"
              fill="black"
            />
          </svg>
        </button>
      </div>

      <div
        className={`absolute mt-[16px] w-[299px] h-[274px] origin-top-right rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-dropdown focus:outline-none ${
          isOpen ? "" : "opacity-0 invisible"
        } transition-opacity duration-300 ease-in-out`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          <a
            href="#"
            className="text-black text-base font-semibold block px-4 py-2 hover:text-[#C85BF1]"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
            onClick={closeTab}
          >
            Account settings
          </a>
          <a
            href="#"
            className="text-black text-base font-semibold block px-4 py-2 hover:text-[#C85BF1]"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
            onClick={closeTab}
          >
            Support
          </a>
          <a
            href="#"
            className="text-black text-base font-semibold block px-4 py-2 hover:text-[#C85BF1]"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
            onClick={closeTab}
          >
            License
          </a>
          <form method="POST" action="#" role="none">
            <button
              type="submit"
              className="text-black text-base font-semibold block px-4 py-2 hover:text-[#C85BF1]"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
              onClick={closeTab}
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
