"use client";
import PropTypes from "prop-types";
import formatDate from "@/utils/formatDate";

export default function NewsDetail({ title, date, content }) {
  return (
    <div className="news__body" onClick={(e) => e.stopPropagation()}>
      <div className="news__title">{title}</div>
      <span className="news__meta">{formatDate(date)}</span>
      <p className="news__content">{content}</p>
    </div>
  );
}

NewsDetail.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  content: PropTypes.string.isRequired
};
