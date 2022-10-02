import logo from "./../assets/logo.png";
import bitcoin from "./../assets/Bitcoin-black.png";
import visa from "./../assets/Visa.png";
import master from "./../assets/Mastercard.png";
import twitter from "./../assets/twitter.png";
import youtube from "./../assets/youtube.png";
import instagram from "./../assets/instagram.png";
import linkedin from "./../assets/linkedin.png";
import facebook from "./../assets/linkedin.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top flex justify-between g-3 py-6">
          <div className="crappo flex-2">
            <a
              className="flex  ff-inter fw-600 fs-medium align-center fw-600 fs-medium g-1"
              href="#"
            >
              <img src={logo} style={{ height: "4rem", width: "4rem" }} />
              CRAPPO
            </a>
          </div>
          <div className="flex-2 nav-links">
            <p className="fs-input fw-500 line-4 mb-2">Quick Links</p>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </div>

          <div className="flex-2 resources-links">
            <p className="fs-input fw-500 line-4 mb-2">Resources Links</p>
            <li>
              <a href="#"> Download Whitepapper</a>
            </li>
            <li>
              <a href="#"> Smart Token</a>
            </li>
            <li>
              <a href="#">Blockchain Explorer </a>
            </li>
            <li>
              <a href="#">Crypto API </a>
            </li>
            <li>
              <a href="#"> Interest</a>
            </li>
          </div>
          <div className="accept-payment" style={{ flex: 3 }}>
            <p className="fw-500 fs-large mb-4">
              We accept following payment systems
            </p>
            <div className="flex  items-center justify-between ">
              <img src={visa} alt="Visa" />
              <img src={master} alt="Master" />
              <img src={bitcoin} alt="bitcoin" />
              <img />
            </div>
          </div>
        </div>
        <div className="flex justify-between py-3">
          <p className="fw-400 fs-normal ">©2021 CRAPPO. All rights reserved</p>
          <div className="flex justify-between g-2">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={youtube} alt="youtube" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
