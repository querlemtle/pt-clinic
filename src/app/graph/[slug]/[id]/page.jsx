import { getDocById } from "@/utils/firebase/firestore";
import { db } from "@/utils/firebase/init";
import ArticleDetail from "@/components/ArticleDetail";

export default async function GraphArticle({ params }) {
  const { slug: category, id } = params;
  const article = await getDocById(db, "graph", id);
  return <ArticleDetail category={category} article={article} />;
}
