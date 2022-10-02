import logo from "./../assets/logo.png";
const Header = () => {
  return (
    <header className="bg-primary p-30">
      <div className="container flex align-center">
        <a className="flex align-center ff-inter fw-600 fs-medium g-2" href="#">
          <img src={logo} /> CRAPPO
        </a>
        <nav className="primary-nav ml-auto flex align-center ">
          <ul
            aria-label="nav-list"
            role="list"
            className="nav-list  flex align-center g-2 flex-nowrap"
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
