import PropTypes from "prop-types";
import Image from "next/image";

export default function StaffCard({
  pfp,
  isPfpAtRight,
  staffName,
  staffTitle,
  staffResume
}) {
  return (
    <div className="card card--staff">
      <div className={`card__pfp ${isPfpAtRight && "card__pfp--right"}`}>
        <Image width={1024} height={1024} src={pfp} alt={staffName} className="card__img" />
      </div>
      <div className="card__body">
        <div className="card__title card__title--staff">
          <h2 className="card__name">{staffName}</h2>
          <span>{staffTitle}</span>
        </div>
        <ul className="card__list">
          <li>
            學經歷
            <ul className="card__sublist">
              {staffResume.experience.map((experience) => {
                return <li key={experience}>{experience}</li>;
              })}
            </ul>
          </li>
          <li>
            專業認證
            <ul className="card__sublist">
              {staffResume.certificates.map((certificate) => {
                return <li key={certificate}>{certificate}</li>;
              })}
            </ul>
          </li>
          <li>
            專長
            <ul className="card__sublist">
              {staffResume.specialties.map((specialty) => {
                return <li key={specialty}>{specialty}</li>;
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

StaffCard.propTypes = {
  pfp: PropTypes.string.isRequired,
  isPfpAtRight: PropTypes.bool.isRequired,
  staffName: PropTypes.string.isRequired,
  staffTitle: PropTypes.string.isRequired,
  staffResume: PropTypes.object.isRequired
};
