import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import cup from "../../assets/images/cup.png";
const Footer = () => {
  return (
    <footer className="lg:p-48 bg-base-200 text-base-content">
      <div className="flex justify-between my-24">
        <img src={cup} alt="cup" />
        <p>
          <span className="mr-4">Ready to get started?</span>
          <button className="btn btn-primary text-white border-none bg-gradient-to-r from-gradient-start to-gradient-end">Get Started</button>
        </p>
      </div>
      <div className="footer">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@tea-house.com"
                className="py-4 bg-transparent border-b-2 border-black outline-none"
              />
              <button className="btn btn-primary ml-2 top-0 right-0 rounded-full border-none bg-gradient-to-r from-gradient-start to-gradient-end">
                <MdArrowForwardIos />
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="mt-10 text-center">
        <p>Copyright © 2024 - All right reserved by Tea House Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
