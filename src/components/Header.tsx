import Link from "next/link";
import React, { FC, useState, useEffect } from "react";
import { AiOutlineFacebook } from "react-icons/ai";

interface IRoute {
  text: string;
  href: string;
}
const Header: FC = () => {
  return (
    <>
      <header className="header" data-header>
        <div className="overlay" data-overlay></div>

        <div className="header-bottom">
          <div className="container">
            <nav className="navbar" data-navbar>
              <div className="navbar-top">
                <a href="#" className="logo">
                  {/* <img src="./assets/images/logo-blue.svg" alt="Tourly logo" /> */}
                </a>

                <button
                  className="nav-close-btn"
                  aria-label="Close Menu"
                  data-nav-close-btn
                ></button>
              </div>

              <ul className="navbar-list">
                <li>
                  <Link href={"/"}>
                    <a className="navbar-link" data-nav-link>
                      home
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href={"/post"}>
                    <a className="navbar-link" data-nav-link>
                      All Post
                    </a>
                  </Link>
                </li>

                <li>
                  <a href="#destination" className="navbar-link" data-nav-link>
                    destination
                  </a>
                </li>

                <li>
                  <a href="#package" className="navbar-link" data-nav-link>
                    packages
                  </a>
                </li>

                <li>
                  <a href="#gallery" className="navbar-link" data-nav-link>
                    gallery
                  </a>
                </li>

                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>
                    contact us
                  </a>
                </li>
              </ul>
            </nav>

            <div></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
