import {
  collection,
  getDoc,
  getDocs,
  query,
  orderBy,
  where,
  doc
} from "firebase/firestore";

export async function getNews(db) {
  try {
    const newsColl = query(
      collection(db, "news"),
      orderBy("publishedAt", "desc")
    );
    const newsSnapshot = await getDocs(newsColl);
    const newsList = newsSnapshot.docs.map((doc) => doc.data());
    return newsList;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getArticles(db, category) {
  try {
    if (!category) return;
    const articlesColl = query(
      collection(db, "graph"),
      where("tag", "==", category)
    );
    const articleSnapshot = await getDocs(articlesColl);
    const articleList = articleSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    return articleList;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getArticleById(db, id) {
  try {
    if (!id) return;
    const article = await getDoc(doc(db, "graph", id));
    return article.data();
  } catch (error) {
    throw new Error(error);
  }
}
