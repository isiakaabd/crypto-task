import PropTypes from "prop-types";

const MiniCard = ({ src, heading, sub }) => {
  return (
    <div className="flex g-2">
      <div className="left">
        <img src={src} className="br-50" alt={sub} />
      </div>
      <div className="right flex flex-column">
        <p className="fs-sub-heading fw-700">{heading}</p>
        <p className="fs-normal fs-normal fw-400 gray">{sub}</p>
      </div>
    </div>
  );
};

MiniCard.propTypes = {
  src: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
};

export default MiniCard;
