import React from "react";

const MainCard = () => {
  return (
    <div className="mx-auto mx-942 bg-white clr-primary pt-2 br-top">
      <div className="flex flex-nowrap justify-between g-3 align-center ">
        <input placeholder="Enter Your dash Rate" className="flex-2 fs-input" />
        <select name="" id="" className="flex-1 fs-input">
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
