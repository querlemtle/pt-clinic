import BodySvg from "@/components/BodySvg";

export default function Graph() {
  return (
    <main className="main">
      <section className="graph">
        <h2 className="title title--center">
          <span className="title__deco">知識圖表</span>
        </h2>
        <div className="graph__canvas">
          <BodySvg />
        </div>
      </section>
    </main>
  );
}
