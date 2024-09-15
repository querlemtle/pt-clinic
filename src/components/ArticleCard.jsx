import Link from "next/link";
import PropTypes from "prop-types";

export default function ArticleCard({ id, category, title, content }) {
  return (
    <Link href={`${category}/${id}`}>
      <div className="card card--article">
        <h3 className="card__title card__title--article">{title}</h3>
      </div>
    </Link>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired
};
