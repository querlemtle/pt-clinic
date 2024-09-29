import PropTypes from "prop-types";
import { forwardRef } from "react";

const IconCard = forwardRef(function IconCard({ zhName, enName, brief, iconName }, ref) {
  return (
    <div className="card card--service" ref={ref}>
      <div className={`card__icon card__icon--${iconName}`}></div>
      <div>
        <h3>{zhName}</h3>
        <h4>{enName}</h4>
      </div>
      <p>{brief}</p>
    </div>
  );
});

export default IconCard;

IconCard.propTypes = {
  zhName: PropTypes.string.isRequired,
  enName: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
};
