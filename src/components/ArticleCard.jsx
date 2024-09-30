import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

export default function ArticleCard({ id, category, title, img }) {
  return (
    <Link href={`${category}/${id}`}>
      <div
        className="card card--article"
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        <div className="card__cover">
          <h3 className="card__title card__title--article">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

ArticleCard.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};
