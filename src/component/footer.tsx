import { IoIosArrowForward } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className="footer-component">
        <div className="main text-sm bg-[#D9E2FF]">
          <div className="p-6 w-[90%] m-auto flex justify-evenly">
            <h1 className="text-xl font-bold text-[#2C106A]">
              H2 2 Column Call to Action
            </h1>
            <div className="border-l border-slate-300 space-y-1 pl-6">
              <p className="font-semibold text-[#2C106A]">
                More about Advocacy and Regulatory
              </p>
              <p className="text-xs">Lorem ipsum dolor sit amet.</p>
              <p className="flex items-center gap-2 pt-2 font-semibold text-[#2C106A]">
                Learn More
                <IoIosArrowForward className="text-[#2C106A] w-4 p-0.5 h-4 rounded-full bg-[#A7B5FE]" />
              </p>
            </div>
            <div className="space-y-1 border-l border-slate-300 pl-6">
              <p className="font-semibold text-[#2C106A]">
                Get Started with WIFI Alliance
              </p>
              <p className="text-xs">Lorem ipsum dolor sit amet.</p>
              <p className="flex items-center gap-2 pt-2 font-semibold text-[#2C106A]">
                Learn More
                <IoIosArrowForward className="text-[#2C106A] w-4 p-0.5 h-4 rounded-full bg-[#A7B5FE]" />
              </p>
            </div>
          </div>
        </div>

        <footer className="bg-[#160835] text-white py-8 text-sm">
          <div className="w-[90%] m-auto">
            <div className="flex justify-between pb-16">
              <img
                src="assets/logo.png"
                alt="Wi-Fi Alliance Logo"
                className="w-[4rem]"
              />

              {/* Center Section - Footer Navigation */}
              <ul className="center flex space-x-8 text-sm font-semibold">
                <li className="group relative">
                  <a href="#" className="hover:text-gray-400">
                    Solutions +
                  </a>
                </li>
                <li className="group relative">
                  <a href="#" className="hover:text-gray-400">
                    Membership +
                  </a>
                </li>
                <li className="group relative">
                  <a href="#" className="hover:text-gray-400">
                    Certification +
                  </a>
                </li>
                <li className="group relative">
                  <a href="#" className="hover:text-gray-400">
                    Advocacy & Regulatory +
                  </a>
                </li>
                <li className="group relative">
                  <a href="#" className="hover:text-gray-400">
                    News & Events +
                  </a>
                </li>
                <li className="group relative">
                  <a href="#" className="hover:text-gray-400">
                    Resources +
                  </a>
                </li>
                <li className="group relative">
                  <a href="#" className="hover:text-gray-400">
                    About Us +
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-between items-center ">
              <div className="">
                <p className="text-sm">
                  © 2024 Wi-Fi Alliance. All rights reserved.
                </p>

                <div className="flex space-x-4 text-white mt-2">
                  <FaXTwitter className="hover:text-gray-400 cursor-pointer bg-white w-5 h-5 rounded-sm p-0.5 text-black" />
                  <FaFacebookF className="hover:text-gray-400 cursor-pointer bg-white w-5 h-5 rounded-sm p-0.5 text-black" />
                  <TiSocialLinkedin className="hover:text-gray-400 cursor-pointer bg-white w-5 h-5 rounded-sm p-0.5 text-black" />
                  <FaYoutube className="hover:text-gray-400 cursor-pointer bg-white w-5 h-5 rounded-sm p-0.5 text-black" />
                  <IoLogoInstagram className="hover:text-gray-400 cursor-pointer bg-white w-5 h-5 rounded-sm p-0.5 text-black" />
                </div>
              </div>
              <div className="">
                <div>
                  <a href="#" className="hover:underline">
                    Media Kit
                  </a>
                  <span className="mx-2">|</span>
                  <a href="#" className="hover:underline">
                    Terms of Use
                  </a>
                  <span className="mx-2">|</span>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                  <span className="mx-2">|</span>
                  <a href="#" className="hover:underline">
                    Vulnerability Reporting
                  </a>
                </div>
              </div>
              <div className="">
                <div className="right">
                  <a
                    href="#"
                    className="bg-[#FFCD2E] text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
