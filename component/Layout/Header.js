import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Navlink from "./Navlink";

function Header() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const router = useRouter();

  const _toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className="navigation">
        <div className="container"></div>
        {/* ================menu nav============= */}
        <div className={`${sticky ? "is-sticky" : ""} menu-nav `}>
          <div className="container">
            <div className="menu-nav-inner">
              <div className="menu-nav-inner-left">
                {router.pathname == "/blog/[slug]" ? (
                  <div className="logo">
                    <Link href={"/"}>
                      <span>
                        {" "}
                        <Image
                          src="/assets/img/logo/logo.svg"
                          width={192}
                          height={40}
                          alt="logo"
                        />
                      </span>
                    </Link>
                  </div>
                ) : (
                  <div className="logo">
                    <Link href={"/"}>
                      <span>
                        {" "}
                        <Image
                          src="/assets/img/logo/logo.svg"
                          width={192}
                          height={40}
                          alt="logo"
                        />
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              <div
                className={`${
                  sidebarActive ? "active" : ""
                } menu-nav-inner-right`}
              >
                <div className="menu-nav-inner-right-inner">
                  <div className="close-nav" onClick={_toggleSidebar}>
                    <Image
                      src="/assets/img/close.png"
                      alt="Image Not Found"
                      height={15}
                      width={15}
                      className="close-icon"
                    />
                  </div>
                  <ul className="nav-menu">
                    <Navlink
                      href="/"
                      text="Home"
                      _toggleSidebar={_toggleSidebar}
                    />
                    <Navlink
                      href="/about"
                      text="About"
                      _toggleSidebar={_toggleSidebar}
                    />
                    <li className="nav-list" onClick={_toggleDropdown}>
                      <div className="nav-link">
                        Services{" "}
                        <span>
                          <FaAngleDown />
                        </span>
                      </div>

                      <div
                        className={
                          dropdownActive ? "dp-menu active" : "dp-menu"
                        }
                      >
                        <div className="container">
                          <ul className="dp-menu-ul">
                            <li onClick={_toggleSidebar}>
                              <Link href={"/nft-website-development"}>
                                <div className="dp-link">
                                  <div className="icon-add">
                                    <Image width={45} height={45} src="/assets/img/nav/nft-development.png" alt="" />
                                  </div>
                                  <div className="multi-text">
                                    <h4 className="nav-title">NFT Website Development</h4>
                                    <p>Innovative NFT Website Solutions</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li onClick={_toggleSidebar}>
                              <Link href={"/metaverse-development"}>
                                <div className="dp-link">
                                  <div className="icon-add">
                                    <Image width={45} height={45} src="/assets/img/nav/metaverse-development.png" alt=" Metaverse Development" />
                                  </div>
                                  <div className="multi-text">
                                    <h4 className="nav-title">
                                      Metaverse Development
                                    </h4>
                                    <p>Empower Digital Transformation Today</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li onClick={_toggleSidebar}>
                              <Link href={"/website-design"}>
                                <div className="dp-link">
                                  <div className="icon-add">
                                    <Image width={45} height={45} src="/assets/img/nav/web-design.png" alt="Website Design" />
                                  </div>
                                  <div className="multi-text">
                                    <h4 className="nav-title">Website Design</h4>
                                    <p>Enhance Online Branding Success</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li onClick={_toggleSidebar}>
                              <Link href={"/defi-development"}>
                                <div className="dp-link">
                                  <div className="icon-add">
                                    <Image width={45} height={45} src="/assets/img/nav/defi-development.png" alt="" />
                                  </div>
                                  <div className="multi-text">
                                    <h4 className="nav-title">
                                      DeFi Development
                                    </h4>
                                    <p>Empower Finance Through DeFi</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li onClick={_toggleSidebar}>
                              <Link href={"/marketing"}>
                                <div className="dp-link">
                                  <div className="icon-add">
                                    <Image width={45} height={45} src="/assets/img/nav/marketing.png" alt="Marketing" />
                                  </div>
                                  <div className="multi-text">
                                    <h4 className="nav-title">Marketing</h4>
                                    <p>Boost Brand and Revenue</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li onClick={_toggleSidebar}>
                              <Link href={"/smart-contract-development"}>
                                <div className="dp-link">
                                  <div className="icon-add">
                                    <Image width={45} height={45} src="/assets/img/nav/smart-contact.png" alt="" />
                                  </div>
                                  <div className="multi-text">
                                    <h4 className="nav-title">
                                      Smart Contract Development
                                    </h4>
                                    <p>Elevate Transactions, Maximize Security </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    <Navlink
                      href="/blog"
                      text="Blog"
                      
                      _toggleSidebar={_toggleSidebar}
                    />
                    <Navlink
                      href="/faqs"
                      text="FAQs"
                      _toggleSidebar={_toggleSidebar}
                    />
                    <Navlink
                      href="/case-study"
                      text="Case Study"
                      _toggleSidebar={_toggleSidebar}
                    />
                    <Navlink
                      href="/contact"
                      text="Contact"
                      _toggleSidebar={_toggleSidebar}
                    />

                    <li
                      className="nav-list let-talk-btn"
                      onClick={_toggleSidebar}
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault(); // Prevent the default link behavior
                          Tawk_API.toggle(); // Your JavaScript code here
                        }}
                        className="nav-link login-btn pop-hover"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.00049 13.9425C3.00049 14.1414 2.92147 14.3322 2.78082 14.4728C2.64017 14.6135 2.4494 14.6925 2.25049 14.6925C2.05158 14.6925 1.86081 14.6135 1.72016 14.4728C1.57951 14.3322 1.50049 14.1414 1.50049 13.9425V9.375C1.50049 5.23275 4.85824 1.875 9.00049 1.875C13.1427 1.875 16.5005 5.23275 16.5005 9.375V11.6895C16.5005 11.8884 16.4215 12.0792 16.2808 12.2198C16.1402 12.3605 15.9494 12.4395 15.7505 12.4395C15.5516 12.4395 15.3608 12.3605 15.2202 12.2198C15.0795 12.0792 15.0005 11.8884 15.0005 11.6895V9.375C15.0005 7.7837 14.3683 6.25758 13.2431 5.13236C12.1179 4.00714 10.5918 3.375 9.00049 3.375C7.40919 3.375 5.88307 4.00714 4.75785 5.13236C3.63263 6.25758 3.00049 7.7837 3.00049 9.375V13.9425ZM3.00049 9.375H4.50049C4.89831 9.375 5.27984 9.53304 5.56115 9.81434C5.84245 10.0956 6.00049 10.4772 6.00049 10.875V14.625C6.00049 15.0228 5.84245 15.4044 5.56115 15.6857C5.27984 15.967 4.89831 16.125 4.50049 16.125H3.00049C2.60266 16.125 2.22113 15.967 1.93983 15.6857C1.65852 15.4044 1.50049 15.0228 1.50049 14.625V10.875C1.50049 10.4772 1.65852 10.0956 1.93983 9.81434C2.22113 9.53304 2.60266 9.375 3.00049 9.375ZM3.00049 10.875V14.625H4.50049V10.875H3.00049ZM13.5005 9.375H15.0005C15.3983 9.375 15.7798 9.53304 16.0611 9.81434C16.3425 10.0956 16.5005 10.4772 16.5005 10.875V14.625C16.5005 15.0228 16.3425 15.4044 16.0611 15.6857C15.7798 15.967 15.3983 16.125 15.0005 16.125H13.5005C13.1027 16.125 12.7211 15.967 12.4398 15.6857C12.1585 15.4044 12.0005 15.0228 12.0005 14.625V10.875C12.0005 10.4772 12.1585 10.0956 12.4398 9.81434C12.7211 9.53304 13.1027 9.375 13.5005 9.375ZM13.5005 10.875V14.625H15.0005V10.875H13.5005Z"
                            fill="white"
                          />
                        </svg>
                        Let's Talk
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="open-mobile-menu" onClick={_toggleSidebar}>
                <span>
                  <AiOutlineMenu />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* ================menu nav end============= */}
      </nav>
    </>
  );
}
export default Header;
