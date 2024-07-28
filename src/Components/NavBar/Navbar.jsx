import React, { useState } from 'react';

const menuItems = [
  {
    name: 'Aviation',
    href: '#',
  },
  {
    name: 'AstroPhysics',
    href: '#',
  },
  {
    name: 'Space Exploration',
    href: '#',
  },
  {
    name: 'Defence',
    href: '#',
  },
  {
    name: 'Indian Organizations',
    href: '#',
  },
  {
    name: 'Special Series',
    href: '#',
  },
];

export function NavBar() {
  const [searchMenuVisible, setSearchMenuVisible] = useState(false);

  const toggleSearchMenu = () => {
    setSearchMenuVisible(!searchMenuVisible);
  };

  return (
    <div className="relative w-full bg-white mb-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <img src="/Images/Logo.png" alt="Logo" height={40} width={80} />
        </div>
        <div className="hidden lg:flex lg:flex-grow lg:justify-center">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name} className="flex items-center space-x-1">
                <a
                  href={item.href}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900 flex items-center"
                >
                  {item.name}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-800 rounded-full focus:outline-none"
            onClick={toggleSearchMenu}
          />
          {searchMenuVisible && (
            <div className="absolute right-0 mt-20 w-48 bg-white border rounded shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-200"></li>
                <li className="px-4 py-2 hover:bg-gray-200"></li>
                <li className="px-4 py-2 hover:bg-gray-200"></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
