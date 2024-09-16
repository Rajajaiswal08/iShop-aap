import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
          <footer className="bg-gray-100 py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6 px-4">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b">
          {/* Left Column - Brand and Description */}
          <div>
            <h2 className="text-3xl font-bold text-gray-700">iSHOP</h2>
            <p className="text-gray-600 mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          {/* Middle Column - Follow Us */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Follow Us</h2>
            <p className="text-gray-600 mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#"><i className="fab fa-facebook text-2xl text-blue-600"></i></a>
              <a href="#"><i className="fab fa-twitter text-2xl text-blue-400"></i></a>
            </div>
          </div>

          {/* Right Column - Contact Us */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Contact Us</h2>
            <p className="text-gray-600 mt-3">
              iShop: address @building 124 <br />
              Call us now: 9351361306 <br />
              Email: jaiswalraja@gmail.com
            </p>
          </div>
        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-gray-700 text-sm pt-10">
          <div>
            <h3 className="font-semibold text-gray-800">Information</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Infomation</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Service</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Infomation</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Extras</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Infomation</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">My Account</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Infomation</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Useful Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Infomation</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">My Profile</h3>
            <ul className="mt-4 space-y-2 ">
              <li><a href="#"><FaInstagram className='text-[30px]' /></a></li>
              <li><a href="https://whatsapp.com/dl/code=YKJTTWpAj6"><FaWhatsapp className='text-[30px]' /></a></li>
              <li><a href="https://github.com/Rajajaiswal08"><FaGithub className='text-[30px]' /></a></li>
              <li><a href="https://www.linkedin.com/in/raja-jaiswal-500521305"><CiLinkedin className='text-[30px]' /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer