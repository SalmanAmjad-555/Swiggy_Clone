import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { FaHireAHelper } from "react-icons/fa";
import { CiNoWaitingSign } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showMeSide = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <CiSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <FaHireAHelper />,
      name: "Help",
    },
    {
      icon: <CiNoWaitingSign />,
      name: "Sign in",
    },
    {
      icon: <CiShoppingCart />,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 z-[9999]"
       
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[400px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <RxCross1 className=" h-[20px] w-[20px] text-[orange]/90 font-bold mt-32 ml-5 cursor-pointer"
           onClick={hideSideMenu} />
           <div className="flex-col m-[50px] list-none font-semibold text-[1rem] cursor-pointer ">
            <li className="hover:text-[orange]/90">Home</li>
            <li className="hover:text-[orange]/90">About</li>
            <li className="hover:text-[orange]/90">Help</li>
            <li className="hover:text-[orange]/90">Contact us</li>

           </div>
        </div>
      </div>
      <header className="p-[10px] shadow-xl sticky z-[9999] bg-white text-[#686b78] top-0">
        <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center">
          <div className="w-[100px]">
            <img src={logo} alt="" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-black mx-7 ">
              Lahore
            </span>
            Karachi,Islamabad,Multan
            <RxCaretDown
              onClick={showMeSide}
              className="text-[2rem] text-[orange]/90 font-bold inline cursor-pointer"
            />
          </div>
          <nav className="hidden md:flex list-none gap-5 border border-black/70 ml-auto mr-2">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center hover:text-[#fc8019]  cursor-pointer gap-2"
                >
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
