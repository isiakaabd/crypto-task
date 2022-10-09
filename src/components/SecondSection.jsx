import MiniCard from "./Utilities/MiniCard";
import Base from "../../src/assets/Base.png";
import country from "../../src/assets/country.png";
import Icon from "../../src/assets/Icon.png";

const SecondSection = () => {
  return (
    <div className="container  flex justify-between flex-nowrap sm-column g-2">
      <MiniCard src={Base} heading="$30B" sub="Digital Currency Exchanged" />
      <MiniCard src={Icon} heading="10M+" sub="Trusted Wallets Investor" />
      <MiniCard src={country} heading="195" sub="Countries Supported" />
    </div>
  );
};

export default SecondSection;
