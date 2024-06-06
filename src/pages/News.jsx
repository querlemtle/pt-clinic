import news from "@/data/news";
import NewsCard from "@/components/NewsCard";
import formatDate from "@/utils/formatDate";
import FlowSvg from "@/components/FlowSvg";

export default function News() {
  return (
    <main className="main">
      <section className="news news--full">
        <FlowSvg />
        <h2 className="title title--center">最新消息</h2>
        <div className="news__grid">
          {news.map((news) => {
            return (
              <NewsCard
                key={news.date}
                date={formatDate(news.date)}
                title={news.title}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
