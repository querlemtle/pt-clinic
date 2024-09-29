import PropTypes from "prop-types";
import { forwardRef } from "react";

const StepCard = forwardRef(function StepCard({ num, content }, ref) {
  return (
    <div className="card card--step" ref={ref}>
      <span className="card__num">{num}</span>
      <p className="card__content">{content}</p>
    </div>
  );
});

export default StepCard;

StepCard.propTypes = {
  num: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
};
