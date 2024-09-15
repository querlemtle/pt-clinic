"use client";
import PropTypes from "prop-types";
import Link from "next/link";
import graphCategories from "@/data/graphCategories";
import ArticleCard from "./ArticleCard";

export default function GraphArticleList({ category, articleList }) {
  return (
    <div className="graph__grid">
      <Link href="/graph" className="graph__link">&#8592; 圖表總覽</Link>
      <h2 className="graph__category">{graphCategories[category]}</h2>
      <div className="graph__list">
        {articleList.map((article) => (
          <ArticleCard key={article.id} category={category} {...article} />
        ))}
      </div>
    </div>
  );
}

GraphArticleList.propTypes = {
  category: PropTypes.string.isRequired,
  articleList: PropTypes.array.isRequired
};
