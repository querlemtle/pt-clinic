import { db } from "@/utils/firebase/init";
import { getNews } from "@/utils/firebase/firestore";
import NewsList from "@/components/NewsList";

export default async function News() {
  const allNews = await getNews(db);
  return <NewsList allNews={allNews} />;
}
