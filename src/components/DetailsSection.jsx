import baseImage from "../assets/Statistic.png";

const DetailsSection = () => {
  return (
    <div className="bg-secondary py-6">
      <div className="container flex g-6">
        <div className="left  flex-2">
          <img src={baseImage} alt="Statistic-img" />
        </div>

        <div className="right flex flex-column justify-center g-2 flex-1">
          <p className="fw-700 fs-large">Detailed Statistics</p>
          <p className="fs-normal gray fw-400 text-justify">
            View all mining related information in realtime, at any point at any
            location and decide which polls you want to mine in.
          </p>
          <button className="align-self-start clr-white bg-blue mt-1 fs-medium br-32 fw-500 p-more">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
