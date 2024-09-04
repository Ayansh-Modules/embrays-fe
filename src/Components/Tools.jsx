import React, { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Tools = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
    onClick();
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="text-sm h-[3rem] rounded-xl text-white hover:text-black flex items-center justify-center"
      ref={dropdownRef}
    >
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-center max-sm:hover:text-black items-center w-full py-2 font-semibold focus:outline-none text-sm h-[3rem] px-6 max-sm:w-full hover:bg-Layoutneon rounded-xl text-white hover:text-black"
            onClick={toggleDropdown}
          >
            <span className="max-sm:ml-4 sm:ml-[3vw] md:ml-0">Tools</span>
            <RiArrowDownSLine size={20} className="ml-1" />
          </button>
          {isOpen && (
            <div className="absolute left-0 w-40 mt-1 origin-top-left bg-slate-200 divide-y divide-gray-100 rounded-md shadow-lg transition duration-600">
              <div className="py-1">
                {/* Uncomment and add more links as needed */}
                <a
                  onClick={() => handleNavigate("/link-shortener")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Link shortener
                </a>
                <a
                  href="#"
                  onClick={() => handleNavigate("/qr-generator")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  QR Generator
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tools;
