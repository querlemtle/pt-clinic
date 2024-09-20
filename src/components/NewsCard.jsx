"use client";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import Link from "next/link";

const NewsCard = forwardRef(function NewsCard({ date, title, id }, ref) {
  return (
    <div className="card card--news" ref={ref}>
      <Link href={`news/${id}`} className="card__link">
        <span className="card__meta">{date}</span>
        <p className="card__title card__title--news">{title}</p>
      </Link>
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
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
