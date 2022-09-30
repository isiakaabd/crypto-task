import logo from "../../assets/Arrow-Right.png";

const CoinCard = ({ icon, name, word, abb, btnValue }) => {
  return (
    <div
      className="br-16 blur clr-primary flex flex-column align-center p-3 card"
      style={{ maxWidth: "37rem", maxHeight: "43.3rem" }}
    >
      <img src={icon} alt={name} className="p-4" />

      <p className="fw-700 fs-large ">
        {name}{" "}
        <span style={{ height: "2.7rem" }} className="opacity-7 fs-medium pb-2">
          {abb}
        </span>
      </p>
      <p className="fs-normal fw-400 mt-2 text-center">{word} </p>
      <a
        href="#"
        className="flex g-2 mx-20  mb-2 flex-nowrap align-center  fs-medium  btn-mining mt-3 bg-blue br-32 fw-500"
      >
        {btnValue}
        <img src={logo} alt="arrow-forward" />
      </a>
    </div>
  );
};

export default CoinCard;
