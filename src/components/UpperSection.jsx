import logo from "./../assets/Arrow-Right.png";
import illustration from "./../assets/illustration.png";

const UpperSection = () => {
  return (
    <div className="container flex mt-3">
      <div className="left flex-1">
        <div className="flex br-32 p-1 g-1 max-365  align-center clr-white fs-normal p-1 bg-light-dark">
          <span className="line-3 fw-500 br-32 bg-white  clr-primary p-save text-upper">
            75% save
          </span>
          <p className="fw-400  clr-white  ">for the Black Friday weekend</p>
        </div>
        <h1 className="fs-heading fw-700 line-67">
          Fastest & secure platform to invest in Crypto
        </h1>
        <p className="mt-2 fs-normal gray mx-435 fw-400">
          Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
          billion in transactions.
        </p>
        <button
          href="#"
          className="flex g-2 clr-white mx-20 flex-nowrap align-center  fs-medium  btn-free-padding mt-3 bg-blue br-32 fw-500"
        >
          Try for Free
          <img src={logo} alt="arrow-forward" />
        </button>
      </div>

      <div className="right flex-1">
        <img src={illustration} alt="illustration-image" aria-label="Image" />
      </div>
    </div>
  );
};

export default UpperSection;
