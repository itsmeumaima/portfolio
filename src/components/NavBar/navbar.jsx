import React, { useState } from "react";
import "./navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      scroll.scrollTo(contactElem.offsetTop - 100);
    }
  };

  return (
    <nav className="navbar">

      {/* Desktop Menu */}
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Education
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
      </div>

      {/* Desktop Contact Button */}
      <button
        className="desktopMenuBtn"
        aria-label="Go to Contact"
        onClick={scrollToContact}
      >
        <FaEnvelope className="desktopMenuIcon" />
        Contact Me
      </button>

      {/* Mobile Menu Toggle Button */}
      <button
        className="mobileMenuIcon"
        aria-label={showMenu ? "Close menu" : "Open menu"}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="mobileMenu">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileMenuListItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="mobileMenuListItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileMenuListItem"
            onClick={() => setShowMenu(false)}
          >
            Education
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            className="mobileMenuListItem"
            onClick={() => setShowMenu(false)}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileMenuListItem"
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileMenuListItem"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
