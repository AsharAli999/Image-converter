import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <nav className="bg-white dark:bg-indigo-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Image Convertia</span>
          </a>
          <div className="flex md:order-2">
            {/* Dropdown Button */}
            <div className="relative">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={toggleDropdown}
              >
                Other Products
              </button>
              {/* Dropdown Content */}
              {dropdownVisible && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
                  <ul className="py-2">
                    <li>
                      <a
                        href="https://gradientoo-app.vercel.app"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-300 ease-in-out"
                      >
                        Gradientoo
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://json-xml-converter.vercel.app"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-300 ease-in-out"
                      >
                        JSON-XML Converter
                      </a>
                    </li>

                  </ul>
                </div>
              )}
              {/* End Dropdown */}
            </div>
          </div>
          {/* Rest of your navigation */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
