import logo from "../../assets/Arrow-Right.png";
import arrow from "../../assets/arrow.png";

const CoinCard = ({ icon, name, word, abb, btnValue }) => {
  return (
    <div
      className="br-16 blur clr-primary flex transition duration-300 ease-in flex-column align-center p-3 card"
      style={{ maxWidth: "37rem", maxHeight: "43.3rem" }}
    >
      <img src={icon} alt={name} className="p-4" />
      <div className="flex align-center g-1">
        <span className="fw-700 fs-large ">{name} </span>
        <span className="opacity-7 fs-medium">{abb}</span>
      </div>
      <p className="fs-normal fw-400 mt-2 text-center">{word} </p>
      <button
        href="#"
        className="g-2 mx-20 none clr-white first-btn   mb-2 flex-nowrap align-center  fs-medium  btn-mining mt-3 bg-blue br-32 fw-500"
      >
        {btnValue}
        <img src={logo} alt="arrow-forward" />
      </button>
      <a href="#">
        <img
          src={arrow}
          className="mt-3  mb-2 second-btn"
          alt="arrow-forward"
        />
      </a>
    </div>
  );
};

export default CoinCard;
