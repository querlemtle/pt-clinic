import rehabIcon from "./../assets/rehab-icon.svg";
import PropTypes from "prop-types";

export default function IconCard({zhName, enName, brief}) {
  return (
    <div className="card card--service">
      <img src={rehabIcon} alt={zhName} />
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
  brief: PropTypes.string.isRequired
};
