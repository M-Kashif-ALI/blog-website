"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="color-change-5x">
      <header className="">
        <nav className="flex items-center justify-between w-[92%] mx-auto">
          <div>
            <Image
              height={375}
              width={375}
              src="https://th.bing.com/th?id=OIP.2cCra6k3qrr4RZNXv3FSWAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
              alt="Logo"
              className="roll-in-left md:h-[90px] h-[50px] w-[50px] md:w-[90px] rounded-full"
            />
          </div>
          <div className="md:static absolute md:min-h-fit min-h-[50vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <Link
                  className="hover:text-gray-500 duration-200 md:text-2xl md:font-bold font-semibold text-lg hover:underline hover:underline-offset-1 tracking-in-contract-bck-bottom"
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-500 duration-200 md:text-2xl md:font-bold font-semibold text-lg hover:underline hover:underline-offset-1 tracking-in-contract-bck-bottom"
                  href={"/"}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-500 duration-200 md:text-2xl md:font-bold font-semibold text-lg hover:underline hover:underline-offset-1 tracking-in-contract-bck-bottom"
                  href={"/about"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-500 duration-200 md:text-2xl md:font-bold font-semibold text-lg hover:underline hover:underline-offset-1 tracking-in-contract-bck-bottom"
                  href={"/contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-5">
          
            <button className="bg-[#a6c1ee] text-white md:px-5 px-3 md:py-2 py-1 rounded-full hover:bg-[#e4b9f9] duration-700 font-semibold jello-horizontal border border-[#cb7ff1] border-solid">
              Sign In
            </button>

            <div className="md:hidden" onClick={toggleMenu}>
              <RxHamburgerMenu className="text-2xl cursor-pointer" />
            </div>

            {isOpen && (
            <ul className="min-w-[200px] flex flex-col md:hidden absolute top-9 right-2 justify-center items-center   bg-white shadow-lg rounded-lg p-4 slide-top">
              <Link href="/"><li className=" text-lg hover:text-gray-700 hover:bg-sky-300 px-[50px] rounded">Home</li></Link>
              <Link href="/"><li className=" text-lg hover:text-gray-700 hover:bg-sky-300 px-[50px] rounded">Blog</li></Link>
              <Link href="/about"><li className=" text-lg hover:text-gray-700 hover:bg-sky-300 px-[50px] rounded">About</li></Link>
              <Link href="/contact"><li className=" text-lg hover:text-gray-700 hover:bg-sky-300 px-[50px] rounded">Contact</li></Link>
            </ul>
          )}
          </div>
        </nav>
      </header>
      <hr className="border-2"/>
    </div>
  );
};

export default NavBar;
