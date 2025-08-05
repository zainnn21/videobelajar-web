import React, { useState, useEffect, useRef } from "react";

const Profile = (props) => {
  const { srcprofile } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <img
          src={srcprofile}
          className="w-11 h-11 rounded-[10px]"
          alt="profile"
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-16 right-0 rounded-br-sm rounded-bl-sm shadow-2xl bg-white  flex flex-col"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div
            className="border-b px-3 py-4 gap-1.5 border-[#3A35411F] flex flex-col w-50"
            role="none"
          >
            <a
              href="#"
              className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333AD]"
            >
              Profile Saya
            </a>
          </div>
          <div
            className="border-b px-3 py-4 gap-1.5 border-[#3A35411F] flex flex-col w-50"
            role="none"
          >
            <a
              href="#"
              className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333AD]"
            >
              Profile Saya
            </a>
          </div>
          <div
            className="border-b px-3 py-4 gap-1.5 border-[#3A35411F] flex flex-col w-50"
            role="none"
          >
            <a
              href="#"
              className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333AD]"
            >
              Pesananan Saya
            </a>
          </div>
          <div
            className="border-b px-3 py-4 gap-1.5 border-[#3A35411F] flex flex-col w-50"
            role="none"
          >
            <a
              href="#"
              className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#FF5C2B]"
            >
              Keluar
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
