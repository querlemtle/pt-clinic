import bannerImg from "./../assets/flower-on-back.jpg";

export default function Home() {
  return (
    <main className="mt-10">
      <section className="grid grid-cols-12 grid-rows-1">
        <div className="col-start-2 col-end-8 row-start-1">
          <img src={bannerImg} alt="home page banner" className="rounded-2xl" />
        </div>
        <div className="col-span-5 col-start-6 row-start-1 grid grid-cols-6 mix-blend-multiply">
          <h1 className="col-span-6 text-5xl font-bold leading-relaxed text-primary-600 drop-shadow-sec-900">
            找出疼痛<span className="text-secondary-600">源</span>頭
            <br />
            助您恢復身心平<span className="text-secondary-600">衡</span>
          </h1>
          <h2 className="col-span-full col-start-2 font-bold text-primary-800">
            讓我們的專業團隊協助您定位病痛原因
            <br />
            以最適合的方式改善問題、重拾活力
          </h2>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}
