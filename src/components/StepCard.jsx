import PropTypes from "prop-types";

export default function StepCard({ num, content }) {
  return (
    <div className="card card--step">
      <span className="card__num">{num}</span>
      <p className="card__content">{content}</p>
    </div>
  );
}

StepCard.propTypes = {
  num: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
};
