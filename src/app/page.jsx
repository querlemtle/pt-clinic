import { db } from "@/utils/firebase/init";
import { getNews } from "@/utils/firebase/firestore";
import Home from "@/components/Home";

export default async function Page() {
  const news = await getNews(db);
  return <Home news={news} />
}
