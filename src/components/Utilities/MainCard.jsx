const MainCard = () => {
  return (
    <div className="mx-auto mx-942 bg-white clr-primary p-2 br-top sm-p4 pb-0">
      <div className="flex flex-nowrap justify-between g-4 align-center sm-column ">
        <input
          placeholder="Enter Your dash Rate"
          className="flex-2 fs-input sm-flex-1 w-100 line-2"
        />
        <select name="" id="" className="flex-1 fs-input w-100">
          <option value="TH/s">TH/s</option>
          <option value="TH/s">TH/s</option>
          <option value="TH/s">TH/s</option>
        </select>

        <button
          href=""
          className="br-32 bg-blue fs-medium clr-white fw-500 p-calculate"
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default MainCard;
