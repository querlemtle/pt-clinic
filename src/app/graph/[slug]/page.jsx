import { notFound } from "next/navigation";
import graphCategories from "@/data/graphCategories";
import GraphArticleList from "@/components/GraphArticleList";
import { db } from "@/utils/firebase/init";
import { getArticles } from "@/utils/firebase/firestore";

export default async function Page({ params }) {
  const category = params.slug;
  if (!graphCategories[category]) {
    notFound();
  }

  const articleList = await getArticles(db, category);

  return (
    <main className="main main--bg">
      <GraphArticleList category={category} articleList={articleList} />
    </main>
  );
}
