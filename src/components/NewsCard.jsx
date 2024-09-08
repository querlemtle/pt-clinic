import PropTypes from "prop-types";
import { forwardRef } from "react";

const NewsCard = forwardRef(function NewsCard({ date, title }, ref) {
  return (
    <div className="card card--news" ref={ref}>
      <a href="#" className="card__link">
        <span className="card__meta">{date}</span>
        <p className="card__title card__title--news">{title}</p>
      </a>
    </div>
  );
});

export default NewsCard;

NewsCard.propTypes = {
  // https://stackoverflow.com/questions/39627545/react-prop-validation-for-date-objects
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  title: PropTypes.string.isRequired
};
