import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import logo from "../../../../assets/footerLogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-theme-200">
      <footer className="footer p-10 text-white container mx-auto ">
        <div>
          <img src={logo} alt="" />
          <p>
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br />
            trainer who is also a serial .
          </p>
          <div className="flex gap-3">
            <Link className="bg-black p-2 text-lg rounded-full">
              <FaGoogle></FaGoogle>
            </Link>
            <Link className="bg-black p-2 text-lg rounded-full">
              <FaTwitter></FaTwitter>
            </Link>
            <Link className="bg-black p-2 text-lg rounded-full">
              <FaInstagram></FaInstagram>
            </Link>
            <Link className="bg-black p-2 text-lg rounded-full">
              <FaLinkedin></FaLinkedin>
            </Link>
          </div>
        </div>
        <div>
          <span className="footer-title">About</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Why Car Doctor</a>
          <a className="link link-hover">About</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accessibility</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
