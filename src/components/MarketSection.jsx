import group from "../assets/Group.png";
import smallBitcoin from "../assets/smallBitcoin.png";
import arrowUp from "../assets/arrow-up.png";

const MarketSection = () => {
  return (
    <div className="bg-secondary fs-sub-heading p-2 ">
      <p
        className="text-center fw-700 mx-auto p-2"
        style={{ maxWidth: "75.8rem" }}
      >
        Market sentiments, portfolio, and run the infrastructure of your choice
      </p>
      <div className="container flex g-3 sm-column">
        <div className="left pt-2 flex-1">
          <p className="fw-700 fs-large">Invest Smart</p>
          <p className="mt-2 gray fs-normal fw-400 mb-3">
            Get full statistic information about the behaviour of buyers and
            sellers will help you to make the decision.
          </p>
          <button className="br-32 bg-blue fs-medium fw-500 clr-white p-more">
            Learn More
          </button>
        </div>
        <div className="right flex-1">
          <div className="bg-card-color p-3 br-16">
            <div className="flex justify-between align-item-start">
              <div className="flex g-2">
                <img
                  src={smallBitcoin}
                  className="align-self-start"
                  alt="bitcoin-icon"
                />
                <div className="flex flex-column">
                  <div className="flex  g-1 ">
                    <p className="fw-700 fs-semi">Bitcoin</p>
                    <p className="fw-600 fs-normal gray line-2 .opacity-7">
                      BTC
                    </p>
                  </div>
                  <p className="line-17 mt-1 fw-400 fs-14 ff-inter clr-faded-white">
                    0.00080 BTC
                  </p>
                </div>
              </div>
              <p className=" line-17 clr-light-green ff-inter fs-14 align-self-center">
                +125%
              </p>
            </div>
            <img src={group} alt="chart" className="mt-2" />
          </div>
          <div
            className="flex justify-between"
            style={{ marginTop: "-5rem", marginInline: "4rem" }}
          >
            <div
              className="bg-light-blue p-2 br-16"
              style={{
                maxWidth: "17.8rem",
                height: "18.4rem",
              }}
            >
              <p
                className="ff-inter fw-600 fs-input"
                style={{ lineHeight: "2.8rem" }}
              >
                Increase in Trade
              </p>
              <div className="flex mt-2  g-1">
                <p
                  style={{ lineHeight: "2.9rem" }}
                  className="fw-700 fs-semi ff-inter"
                >
                  +75%
                </p>
                <img src={arrowUp} alt="arrowUp-icon" className="pb-2" />
              </div>
              <p
                style={{ lineHeight: "1.9rem" }}
                className="ff-inter fs-normal fw-400 clr-faded-white"
              >
                Sell option
              </p>
            </div>

            <div
              style={{ maxWidth: "169px", height: "84px" }}
              className="bg-light-blue text-center p-2 br-16"
            >
              <p style={{ lineHeight: "" }} className="fw-700 fs-semi">
                $15.32
              </p>
              <p className="fs-normal clr-faded-white line-2">
                Price in dollar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSection;
