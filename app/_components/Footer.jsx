import React from "react";

const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
