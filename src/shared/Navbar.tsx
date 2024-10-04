import React from "react";
import { Button } from "../component/ui/button";
import { Input } from "../component/ui/input";
import { CircleUserRound } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../component/ui/select";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="text-sm w-full fixed top-0 left-0 z-50">
        {/* First Navbar (Main Navigation Links) */}
        <nav className="bg-[#2c1262] py-1.5 px-12 flex justify-between items-center border-b">
          {/* Search Bar */}
          <div className="flex items-center space-x-2 border bg-white rounded-full p-1">
            <Input
              type="search"
              placeholder="Search for anything"
              className="px-4 py-2 rounded-full text-black outline-none w-[300px] border-0 h-7 focus-visible:ring-offset-0 focus-visible:ring-0"
            />
            <Button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold h-7 hover:bg-yellow-500">
              Search
            </Button>
          </div>

          {/* Right Side Links and Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-white font-semibold hover:text-gray-300"
            >
              Member Site
            </a>
            <Button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold h-8 hover:bg-yellow-500">
              Product Finder
            </Button>
            <div className="flex items-center space-x-2 text-white">
              <span className="flex items-center space-x-1">
                <CircleUserRound />
                <span className="text-xs">loremipsum@gmail.com</span>
              </span>
              <Select>
                <SelectTrigger className="w-[120px] bg-transparent border-0 font-medium focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Translation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold h-8 hover:bg-yellow-500">
              Contact Us
            </Button>
          </div>
        </nav>

        {/* Second Navbar (Search Bar and More Links) */}
        <nav className="bg-[#2c1262] py-1.5 px-12 flex justify-between items-center">
          <div className="">
            <img
              src="assets/logo.png"
              alt="Wi-Fi Alliance Logo"
              style={{ width: "5rem" }}
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8 text-white font-medium text-xs uppercase">
            <li>
              <a href="#solutions" className="hover:text-gray-400">
                Solutions
              </a>
            </li>
            <li>
              <a href="#membership" className="hover:text-gray-400">
                Membership
              </a>
            </li>
            <li>
              <a href="#certification" className="hover:text-gray-400">
                Certification
              </a>
            </li>
            <li>
              <a href="#advocacy" className="hover:text-gray-400">
                Advocacy & Regulatory
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-gray-400">
                News & Events
              </a>
            </li>
            <li>
              <a href="#resources" className="hover:text-gray-400">
                Resources
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
