import illustration from "../assets/Illustrations2.png";

const ThirdSection = () => {
  return (
    <div className="container flex sm-column g-3">
      <div className="left flex-1">
        <img src={illustration} alt="illustration-icon" />
      </div>
      <div className="align-self-center right flex-1 ">
        <p className="fs-sub-heading fw-700">Why you should choose CRAPPO</p>
        <p className="fs-normal gray mt-2 mb-3">
          Experience the next generation cryptocurrency platform. No financial
          borders, extra fees, and fake reviews.
        </p>
        <button
          href="#"
          className="bg-blue clr-white fs-medium br-32 fw-500 p-more"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ThirdSection;
