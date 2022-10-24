import logo from "./../assets/logo.png";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [state, setState] = useState(false);

  const handleClick = () => setState(!state);

  return (
    <header data-visible={state} className="bg-primary relative header  ">
      <div className="container flex align-center sm-flex-column sm-align-start justify-between  sm-justify-start">
        <div
          className="flex align-center ff-inter fw-600 fs-medium g-2"
          href="#"
        >
          <img src={logo} /> CRAPPO
        </div>
        {!state ? (
          <BiMenu
            size={30}
            aria-controls="primary-navigation"
            className=" mobile-toggle"
            aria-expanded="false"
            onClick={handleClick}
          />
        ) : (
          <FaTimes
            size={30}
            aria-controls="primary-navigation"
            className=" mobile-toggle"
            aria-expanded="true"
            onClick={handleClick}
          />
        )}

        <nav className="sm-width-100 ">
          {/* /* primary-nav flex align-center*/}
          <ul
            aria-label="primary-navigation"
            id="primary-navigation"
            role="list"
            data-visible={state}
            className="nav-list  flex align-center g-2 flex-nowrap sm-flex-column"
          >
            <li className="fs-normal fw-400">
              <a href="#">Products</a>
            </li>
            <li className="fs-normal fw-400">
              <a href="#">Features</a>
            </li>
            <li className="fs-normal fw-400">
              <a href="#">About</a>
            </li>
            <li className="fs-normal fw-400">
              <a href="#">Contact</a>
            </li>

            <div className="ml-3 flex g-2 align-center">
              <li className="fs-normal fw-400">
                <a href="#">Login</a>
              </li>
              <span className="br-1 h-30" />
              <li className="fs-normal fw-400 bg-primary bg-blue br-32 btn-padding">
                <a href="#">Register</a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
