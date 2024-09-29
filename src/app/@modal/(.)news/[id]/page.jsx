import Modal from "@/components/Modal";
import NewsDetail from "@/components/NewsDetail";
import { db } from "@/utils/firebase/init";
import { getDocById } from "@/utils/firebase/firestore";

export default async function NewsModal({ params }) {
  const { id: newsId } = params;
  const news = await getDocById(db, "news", newsId);

  return (
    <Modal>
      <NewsDetail {...news} />
    </Modal>
  );
}
