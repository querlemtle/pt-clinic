import PropTypes from "prop-types";

export default function NewsCard({ date, title }) {
  return (
    <div className="card card--news">
      <span className="card__meta">{date}</span>
      <a href="#" className="card__link">
        {title}
      </a>
    </div>
  );
}

NewsCard.propTypes = {
  // https://stackoverflow.com/questions/39627545/react-prop-validation-for-date-objects
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  title: PropTypes.string.isRequired
};
