import Table from "../assets/Table.png";

const ProfitSection = () => {
  return (
    <div className="bg-secondary py-6">
      <div className="container flex g-3">
        <div className="left flex flex-column justify-center g-2 flex-1">
          <p className="fw-700 fs-large">
            Grow your profit and track your investments
          </p>
          <p className="fs-normal gray fw-400 text-justify">
            Use advanced analytical tools. Clear TradingView charts let you
            track current and historical profit investments.
          </p>
          <button className="align-self-start clr-white  bg-blue mt-1 fs-medium br-32 fw-500 p-more">
            Learn More
          </button>
        </div>
        <div className="right flex-1">
          <img src={Table} alt="Table-Image" />
        </div>
      </div>
    </div>
  );
};

export default ProfitSection;
