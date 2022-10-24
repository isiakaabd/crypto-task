const Mining = () => {
  return (
    <div className=" container bg-linear pt-6">
      <div className="container br-16 bg-blue p-5 flex  sm-column justify-between bg-image">
        <div className="flex flex-column g-3 flex-1 ">
          <p className="fw-700 fs-large">Start mining now</p>
          <p className="fs-normal fs-400 gray pr-10">
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>
        <form className="flex g-3 flex-1">
          <input
            type="text"
            placeholder="Enter your Email"
            className="flex-1 p-28 fs-normal bg-blue clr-white fw-400 "
          />
          <button className="align-self-start bg-white clr-primary sm-align-self-center  fs-medium br-32 fw-500 p-btn">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mining;
