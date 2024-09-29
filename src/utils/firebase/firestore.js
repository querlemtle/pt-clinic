import {
  collection,
  getDoc,
  getDocs,
  query,
  orderBy,
  where,
  doc
} from "firebase/firestore";
import { cache } from "react";

/**
 * getNews 取得所有新聞，依日期降冪排序
 * @param db 資料庫實例
 */
export const getNews = cache(async (db) => {
  try {
    const newsColl = query(collection(db, "news"), orderBy("date", "desc"));
    const newsSnapshot = await getDocs(newsColl);
    const newsList = newsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    return newsList;
  } catch (error) {
    throw new Error(error);
  }
});

/**
 * getArticles 取得同一分類所有知識文章
 * @param db 資料庫實例
 * @param {string} category 分類標籤
 */
export const getArticles = cache(async (db, category) => {
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
});

/**
 * getDocById 取得指定 id 的文件
 * @param db 資料庫實例
 * @param {string} col 集合名稱
 * @param {string} id 文件的 id
 */
export const getDocById = cache(async (db, col, id) => {
  try {
    if (!id) return;
    const docSnapshot = await getDoc(doc(db, col, id));
    return docSnapshot.data();
  } catch (error) {
    throw new Error(error);
  }
});
