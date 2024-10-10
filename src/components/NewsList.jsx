"use client";
import PropTypes from "prop-types";
import NewsCard from "@/components/NewsCard";
import formatDate from "@/utils/formatDate";
import { useRef } from "react";
import NewsLottie from "./NewsLottie";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function NewsList({ allNews }){
  const gsapContainer = useRef();
  const newsCardsRef = useRef([]);
  
  useGSAP(
    () => {
      newsCardsRef.current.forEach((el) =>
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: -100
          },
          {
            opacity: 1,
            y: 0,
          }
        )
      );
    },
    { scope: gsapContainer }
  );

  return (
    <main className="main" ref={gsapContainer}>
      <section className="news news--full">
        <h2 className="title title--center">
          <span className="title__deco">最新消息</span>
        </h2>
        <div className="news__grid">
          {allNews.map((news, i) => {
            return (
              <NewsCard
                ref={(el) => (newsCardsRef.current[i] = el)}
                key={news.date}
                id={news.id}
                date={formatDate(news.date)}
                title={news.title}
              />
            );
          })}
        </div>
        <NewsLottie />
      </section>
    </main>
  );
}

NewsList.propTypes = {
  allNews: PropTypes.array.isRequired
};
