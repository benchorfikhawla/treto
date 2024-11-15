"use client";

import Link from "next/link";
import { useEffect } from "react";
import Nav from "./Nav";

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;

    case 2:
      return <Header2 />;

    default:
      return <DefaultHeader />;
  }
};
export default Header;

const DefaultHeader = () => {
  return (
    <div className="mil-top-panel mil-tp-2 mil-tp-inner">
      <div className="mil-tp-frame">
        <Link legacyBehavior href="/">
          <a className="mil-logo">
            <img src="/img/logonew.png" alt="logo" />
          </a>
        </Link>
        <Nav />
      </div>
      <div className="mil-social">
        <ul>
        <li>
            <a
              href="https://www.facebook.com/hajar.benchorfi.1"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/khawla.benchorfi/"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
           
          <li>
            <a
              href="https://www.linkedin.com/in/khawla-benchorfi-3a46612b9/"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/benchorfikhawla"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-github" />
            </a>
          </li>
           
           
        </ul>
      </div>
    </div>
  );
};

const Header1 = () => {
  return (
    <div className="mil-top-panel mil-tp-2">
      <div className="mil-tp-frame">
        <Link legacyBehavior href="/">
          <a className="mil-logo">
            <img src="/img/logonew.png" alt="logo" />
          </a>
        </Link>
        <Nav />
      </div>
      <div className="mil-social">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/hajar.benchorfi.1"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/khawla.benchorfi/"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/khawla-benchorfi-3a46612b9/"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/benchorfikhawla"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-github" />
            </a>
          </li>
          
          
        </ul>
      </div>
    </div>
  );
};

const Header2 = () => {
  return (
    <div className="mil-top-panel">
      <Link legacyBehavior href="/">
        <a className="mil-logo">
          <img src="/img/logonew.png" alt="logo" />
        </a>
      </Link>
      <Nav />
      
    </div>
  );
};
