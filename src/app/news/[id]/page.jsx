import NewsDetail from "@/components/NewsDetail";
import { db } from "@/utils/firebase/init";
import { getDocById } from "@/utils/firebase/firestore";

export default async function NewsPage({ params }) {
  const { id: newsId } = params;
  const news = await getDocById(db, "news", newsId);

  return (
    <main className="main">
      <NewsDetail {...news} />
    </main>
  );
}
