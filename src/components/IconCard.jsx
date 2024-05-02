import rehabIcon from "./../assets/rehab-icon.svg";
import PropTypes from "prop-types";

export default function IconCard({zhName, enName, brief}) {
  return (
    <div className="flex max-w-44 flex-col items-center rounded-2xl bg-white py-4">
      <img src={rehabIcon} alt={zhName} />
      <h4 className="text-xl font-semibold text-primary-900">{zhName}</h4>
      <h5 className="mb-2 font-semibold text-primary-900">
        {enName}
      </h5>
      <p className="px-5 text-primary-900">
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
