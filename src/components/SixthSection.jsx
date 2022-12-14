import React from "react";
import CoinCard from "./Utilities/CoinCard";
import bitcoin from "../assets/bitcoin.png";
import litecoin from "../assets/litecoin.png";
import etherum from "../assets/etherum.png";

const SixthSection = () => {
  return (
    <div
      className="bg-off-white  pt-0"
      style={{ paddingBottom: "10rem", paddingTop: 0 }}
    >
      <div className="bg-white mx-auto mx-942 clr-primary pt-2 p-4  filter br-end">
        <p className="clr-blue fs-normal fw-500 pb-2  sm-px4">
          ESTIMATED 24 HOUR REVENUE:
        </p>
        <p className="fs-large clr-primary fw-700  sm-px4">
          0.055 130 59 ETH <span className="clr-blue">($1275)</span>
        </p>
        <p className="fs-normal fw-400 off-gray  sm-px4">
          Revenue will change based on mining difficulty and Ethereum price.
        </p>
      </div>

      <div className="container clr-primary ">
        <p className="fw-700 fs-sub-heading text-center">
          Trade securely and market the high growth cryptocurrencies.
        </p>
      </div>
      <div className="container flex g-3 flex-nowrap justify-between sm-column">
        <CoinCard
          icon={bitcoin}
          name="Bitcoin"
          abb="BTC"
          btnValue="Start mining"
          word="  Digital currency in which a record of transactions is maintained."
        />
        <CoinCard
          icon={etherum}
          name="Ethereum"
          abb="ETH"
          btnValue="Start mining"
          word=" Blockchain technology to create and run decentralized digital applications."
        />
        <CoinCard
          icon={litecoin}
          name="Litecoin"
          abb="LTC"
          btnValue="Start mining"
          word=" Cryptocurrency that enables instant payments to anyone in the world."
        />
      </div>
    </div>
  );
};

export default SixthSection;
