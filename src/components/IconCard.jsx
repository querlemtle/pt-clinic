import PropTypes from "prop-types";

export default function IconCard({ zhName, enName, brief, iconName }) {
  return (
    <div className="card card--service">
      <div className={`card__icon card__icon--${iconName}`}></div>
      <div>
        <h3>{zhName}</h3>
        <h4>{enName}</h4>
      </div>
      <p>{brief}</p>
    </div>
  );
}

IconCard.propTypes = {
  zhName: PropTypes.string.isRequired,
  enName: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
};
