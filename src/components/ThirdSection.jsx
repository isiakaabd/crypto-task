import illustration from "../assets/Illustrations2.png";

const ThirdSection = () => {
  return (
    <div className="container flex flex-nowrap">
      <div className="left flex-1">
        <img src={illustration} alt="illustration-icon" />
      </div>
      <div className="align-self-center right flex-1 ">
        <p className="fs-sub-heading fw-700">Why you should choose CRAPPO</p>
        <p className="fs-normal gray mt-2">
          Experience the next generation cryptocurrency platform. No financial
          borders, extra fees, and fake reviews.
        </p>
        <a
          href="#"
          className="bg-blue mt-2 d-inline-block fs-medium br-32 fw-500 p-more"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ThirdSection;
