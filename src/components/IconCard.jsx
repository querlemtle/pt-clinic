import rehabIcon from "./../assets/rehab-icon.svg";
import PropTypes from "prop-types";

export default function IconCard({zhName, enName, brief}) {
  return (
    <div>
      <img src={rehabIcon} alt={zhName} />
      <h4>{zhName}</h4>
      <h5>
        {enName}
      </h5>
      <p>
        {brief}
      </p>
    </div>
  );
}

IconCard.propTypes = {
  zhName: PropTypes.string.isRequired,
  enName: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired
};
