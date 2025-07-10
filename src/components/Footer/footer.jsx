import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Umaima Abdul Rauf. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
