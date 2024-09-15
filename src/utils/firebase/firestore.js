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
    const newsList = newsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
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

export async function getDocById(db, col, id) {
  try {
    if (!id) return;
    const docSnapshot = await getDoc(doc(db, col, id));
    return docSnapshot.data();
  } catch (error) {
    throw new Error(error);
  }
}
