import "./Footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div name='footer' className="footer">
      <div className="container">
        <div className="top">
          <h3 className="">BEACHES.</h3>
          <div className="social">
            <FaFacebook className="icon cursor-pointer" />
            <FaInstagram className="icon cursor-pointer" />
            <FaTwitter className="icon cursor-pointer" />
            <FaPinterest className="icon cursor-pointer" />
            <FaYoutube className="icon cursor-pointer" />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <ul>
              <li>About</li>
              <li>Partnerships</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>Contact</li>
              <li>Terms</li>
              <li>Policy</li>
              <li>Privacy</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
