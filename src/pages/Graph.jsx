import humanBody from "@/assets/body-line.svg";

export default function Graph() {
  return (
    <main className="main">
      <section className="graph">
        <h2 className="title title--center">知識圖表</h2>
        <div className="graph__canvas">
          <img src={humanBody} alt="人體圖" />
        </div>
      </section>
    </main>
  );
}
