import Link from "next/link";
import React, { FC, useState, useEffect } from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineX,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { useRouter } from "next/router";
interface IRoute {
  content: string;
  href: string;
}

const Header: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const router = useRouter();
  const header: IRoute[] = [
    {
      content: "Home",
      href: "/",
    },
    {
      content: "Destinations",
      href: "/travel",
    },
    {
      content: "Food",
      href: "/food",
    },
    {
      content: "Culture",
      href: "",
    },
  ];
  return (
    <>
      <header
        className="header_des md:block fixed bg-[#fff] left-[0] right-[0] hidden"
        data-header
        style={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          zIndex: 10,
        }}
      >
        <div className="container">
          <nav
            className="header_des_container max-w-[1250px] flex justify-between py-[15px] items-center"
            data-navbar
          >
            <div className="flex items-center">
              <a href="">
                <img
                  src="https://static.tacdn.com/img2/brand_refresh/special/pride_month_Tripadvisor_lockup_horizontal_secondary.svg"
                  alt=""
                  className="w-[100px]"
                />
              </a>
            </div>
            <ul className="flex justify-center">
              {header?.map((val, idx) => {
                return (
                  <li
                    key={idx}
                    className={`mx-[25px] py-[5px] ${
                      router?.pathname === val?.href ? "active_nav" : ""
                    } hover_nav`}
                  >
                    <Link
                      href={val?.href}
                      className="font-[600] text-[#121212] text-[16px] "
                    >
                      {/* <a className="font-[600] text-[#121212] text-[16px] "> */}
                      {val?.content}
                      {/* </a> */}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="flex items-center">
              <li className="mx-[5px] cursor-pointer">
                <i className="text-[20px] ">
                  <AiOutlineFacebook />
                </i>
              </li>
              <li className="mx-[5px] cursor-pointer">
                <i className="text-[20px]">
                  <AiOutlineInstagram />
                </i>
              </li>
              <li className="mx-[5px] cursor-pointer">
                <i className="text-[20px] ">
                  <AiOutlineX />
                </i>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <header className="md:hidden block">
        <nav className="flex justify-between py-[15px] items-center px-[15px]">
          <div className="">
            <a href="">
              <img
                src="https://static.tacdn.com/img2/brand_refresh/special/pride_month_Tripadvisor_lockup_horizontal_secondary.svg"
                alt=""
                className="w-[100px]"
              />
            </a>
          </div>
          <div className="cursor-pointer" onClick={() => setToggle(true)}>
            <i className="text-[24px]">
              <AiOutlineMenu />
            </i>
          </div>
        </nav>

        <nav className={`relative `}>
          <div
            className={`fixed z-50 bg-[#fff] top-[0] left-[0] right-[0] bottom-[0] scroll_bar ${
              toggle ? "list_nav_mb" : "list_nav_mb_hidden"
            }`}
          >
            <div
              className="absolute top-[20px] left-[20px] cursor-pointer"
              onClick={() => setToggle(false)}
            >
              <i className="text-[24px]">
                <AiOutlineClose />
              </i>
            </div>
            <div>
              <ul className="mt-[80px]">
                {header?.map((val, idx) => {
                  return (
                    <li key={idx} className={`mx-[25px] my-[25px] text-center`}>
                      <Link
                        onClick={() => setToggle(false)}
                        href={val?.href}
                        className={`font-[600] text-[#121212] py-[10px] text-[16px] hover_nav ${
                          router?.pathname === val?.href ? "active_nav" : ""
                        }`}
                      >
                        {/* <a
                          onClick={() => setToggle(false)}
                          className={`font-[600] text-[#121212] py-[10px] text-[16px] hover_nav ${
                            router?.pathname === val?.href ? "active_nav" : ""
                          }`}
                        > */}
                        {val?.content}
                        {/* </a> */}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
