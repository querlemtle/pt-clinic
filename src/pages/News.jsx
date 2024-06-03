import news from "@/data/news";
import NewsCard from "@/components/NewsCard";
import formatDate from "@/utils/formatDate";

export default function News() {
  return (
    <main className="main">
      <h2 className="title">最新消息</h2>
      <div>
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
    </main>
  );
}
