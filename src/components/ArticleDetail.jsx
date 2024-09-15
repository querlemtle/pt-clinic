"use client";
import Link from "next/link";
import PropTypes from "prop-types";
import graphCategories from "@/data/graphCategories";

export default function ArticleDetail({ category, article }) {
  const { title, content } = article;

  return (
    <main className="main main--bg">
      <div className="graph__grid">
        <aside className="graph__breadcrumbs">
          <span>&#8592; </span>
          <Link href="/graph" className="graph__link">
            圖表總覽
          </Link>
          <span> / </span>
          <Link href={`/graph/${category}`} className="graph__link">
            {graphCategories[category]}
          </Link>
        </aside>
        <article className="article">
          <h3 className="article__title">{title}</h3>
          <p className="article__content">{content}</p>
        </article>
      </div>
    </main>
  );
}

ArticleDetail.propTypes = {
  category: PropTypes.string.isRequired,
  article: PropTypes.object.isRequired
};
