import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [toogle, setToogle] = useState(false);

  const addtoogle = () => {
    setToogle(!toogle);
    // Toggle body scroll
    document.body.style.overflow = toogle ? 'auto' : 'hidden';
  };

  return (
    <>
      {/* Top bar */}
      <div className="w-full mx-auto p-4 border-b">
        <div className="max-w-[1190px] mx-auto">
          <div className="flex items-center justify-between">
            {/* Hidden on mobile, visible on larger screens */}
            <div className="space-x-4">
              <button className="text-lg">EN</button>
              <span>$</span>
              <span className="ml-1">USD</span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <span className="mr-2">My profile</span>
              </div>

              <div className="flex items-center space-x-2 hidden md:flex">
                <span>2 Items</span>
                <span className="text-red-500">$998</span>
              </div>

              <button className="text-xl">🔍</button>
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Navigation (Desktop) */}
      <div className="w-full mx-auto bg-[#F6F7F8] z-10" style={{ position: 'sticky', top: '0', left: '0', zIndex: '20' }}>
        <div className="max-w-[1090px] mx-auto p-4 border-b">
          <div className="flex md:justify-center justify-between text-[27px] font-bold md:flex">
            <img src="images/29ffede1-398a-44c6-a130-bdba04a31c12.png" alt="Logo" />
            <button onClick={addtoogle} className="md:hidden">
              🟰
            </button>
          </div>
          <header className="py-3 px-3 p-5">
            <div className="max-w-[1200px] pl-10 flex items-center">
              <ul className="hidden md:flex justify-center text-center gap-20 text-[20px]">
                <li className="hover:border-b-2 hover:border-red-500 p-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="relative group p-2 hover:border-b-2 hover:border-red-500">
                  <Link to="/Chakout">i shop</Link>
                  <ul className="absolute left-[-150px] top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
                    <li className="p-2">
                      <div className="w-[500px] flex justify-between p-2">
                        <ul className="text-xs">
                          <li className="p-2 hover:bg-gray-100">Airport & Wireless</li>
                          <li className="p-2 hover:bg-gray-100">AppleCare</li>
                          <li className="p-2 hover:bg-gray-100">Bags, Shells & Sleeves</li>
                          <li className="p-2 hover:bg-gray-100">Business & Security</li>
                          <li className="p-2 hover:bg-gray-100">Cables & Dockers</li>
                        </ul>
                        <ul className="text-xs">
                          <li className="p-2 hover:bg-gray-100">Cameras & Video</li>
                          <li className="p-2 hover:bg-gray-100">Car & Travel</li>
                          <li className="p-2 hover:bg-gray-100">Cases & Films</li>
                        </ul>
                        <ul className="text-xs">
                          <li className="p-2 hover:bg-gray-100">Charging Devices</li>
                          <li className="p-2 hover:bg-gray-100">Connected Home</li>
                          <li className="p-2 hover:bg-gray-100">Device & Graphic</li>
                          <li className="p-2 hover:bg-gray-100">Fitness & Sport</li>
                        </ul>
                        <ul className="text-xs">
                          <li className="p-2 hover:bg-gray-100">Headphones</li>
                          <li className="p-2 hover:bg-gray-100">Healthkit</li>
                          <li className="p-2 hover:bg-gray-100">Music Section</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="hover:border-b-2 hover:border-red-500 p-2">
                  <Link to="/Store">Store</Link>
                </li>
                <li className="hover:border-b-2 hover:border-red-500 p-2">
                  <Link to="/Share">Share</Link>
                </li>
                <li className="hover:border-b-2 hover:border-red-500 p-2">
                  <Link to="/Myprofile">My Profile</Link>
                </li>
              </ul>
            </div>
          </header>
        </div>
      </div>

      {/* Mobile Menu */}
      <header
        className={`w-full z-20 bg-gradient-to-b from-red-500 to-blue-600 text-white h-screen p-4 fixed top-0 left-0 transition-transform transform ${
          toogle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-3">
            <span className="text-lg font-semibold">2 Items</span>
            <span>$998</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>My profile</span>
            <span>EN</span>
            <span>$</span>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-full w-[300px] bg-white text-gray-700"
            />
            <span className="absolute right-4 top-2 text-gray-500">🔍</span>
          </div>
        </div>

        <ul className="flex flex-col items-center mt-6 space-y-4 text-xl">
          <li className="hover:border-b-2 hover:text-gray-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:border-b-2 hover:text-gray-300">
            <Link to="/Store">Store</Link>
          </li>
          <li className="hover:border-b-2 hover:text-gray-300">
            <Link to="/Chakout">Checkout</Link>
          </li>
          <li className="hover:border-b-2 hover:text-gray-300">
            <Link to="/Share">Share</Link>
          </li>
          <li className="hover:border-b-2 hover:text-gray-300">
            <Link to="/Myprofile">My Profile</Link>
          </li>
          <li className="hover:border-b-2 hover:text-gray-300 cursor-pointer">
            <button
              onClick={addtoogle}
              className="text-2xl"
            >
              X
            </button>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
