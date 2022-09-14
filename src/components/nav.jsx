import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import Image from "./image";

// Import page header logo icon
import dipHex from "../assets/images/dip/dipHex.png";

import styles from "./nav.module.scss";

const Nav = () => {
  const isActive = useLocation();

  return (
    <nav className={styles.nav} aria-label="main-menu">
      <NavLink
        exact="true"
        to="/"
        className={!isActive ? " " : styles.nav__link}
      >
        Home
      </NavLink>
      <NavLink
        exact="true"
        to="/orders"
        className={!isActive ? " " : styles.nav__link}
      >
        Daily Orders
      </NavLink>
      <NavLink
        exact="true"
        to="/labels"
        className={!isActive ? " " : styles.nav__link}
      >
        Create Labels
      </NavLink>
    </nav>
  );
};

const MobileNav = () => {
  const isActive = useLocation();
  const [isNavOpen, setNavOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        className={
          !isOpen
            ? "hamburger hamburger--elastic"
            : "hamburger hamburger--elastic is-active"
        }
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        aria-expanded="true/false"
        style={{ zIndex: 1000 }}
        onClick={() => {
          [setNavOpen(!isNavOpen), setOpen(!isOpen)];
        }}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div
        className={
          isNavOpen
            ? `${styles.mobileNav} ${styles.expanded}`
            : styles.mobileNav
        }
      >
        <nav
          className={`${styles.nav} ${styles.mobileLinks}`}
          aria-label="main-menu"
        >
          <NavLink
            exact="true"
            to="/"
            className={!isActive ? " " : styles.nav__link}
            onClick={() => {
              [setNavOpen(!isNavOpen), setOpen(!isOpen)];
            }}
          >
            Home
          </NavLink>
          <NavLink
            exact="true"
            to="/orders"
            className={!isActive ? " " : styles.nav__link}
            onClick={() => {
              [setNavOpen(!isNavOpen), setOpen(!isOpen)];
            }}
          >
            Daily Orders
          </NavLink>
          <NavLink
            exact="true"
            to="/labels"
            className={!isActive ? " " : styles.nav__link}
            onClick={() => {
              [setNavOpen(!isNavOpen), setOpen(!isOpen)];
            }}
          >
            Create Labels
          </NavLink>
        </nav>
      </div>
    </>
  );
};

const NavMenu = () => {
  return (
    <header className={styles.pageHeader}>
      <div className="container flex flex-row items-center">
        <div className="flex-none flex items-center">
          <Link to="/" className={styles.dipLogo}>
            <Image src={dipHex} width="612" height="534" alt="logo" />
          </Link>
        </div>
        <div className="flex-1 hidden lg:flex flex-col justify-end items-end">
          <Nav />
        </div>
        <div className="flex lg:hidden justify-end items-center flex-1">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default NavMenu;
