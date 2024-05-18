import bannerImg from "./../assets/flower-on-back.jpg";
import aboutImg from "./../assets/med-team.jpg";
import IconCard from "../components/IconCard";
import services from "../data/services";

export default function Home() {
  return (
    <main className="main">
      <section className="kv">
        <div className="kv__wrapper">
          <img src={bannerImg} alt="首頁宣傳圖" />
        </div>
        <div className="kv__slogan">
          <h1 className="kv__title">
            找出疼痛<span className="kv__accent">源</span>頭
            <br />
            助您恢復身心平<span className="kv__accent">衡</span>
          </h1>
          <h3 className="kv__subtitle">
            讓我們的專業團隊協助您定位病痛原因
            <br />
            以最適合的方式改善問題、重拾活力
          </h3>
        </div>
      </section>
      <section className="about">
        <div className="about__context">
          <h2 className="title">關於我們</h2>
          <p>
            源衡物理治療所是由多位經驗豐富的物理治療師成立，從疾病傷害預防、慢性疼痛、術後復健，我們致力於與患者合作，一同找出疼痛根源；透過個人化的治療方案，希望讓您重獲健康與活力！
          </p>
          <a href="#" className="btn">
            瞭解更多 &#8594;
          </a>
        </div>
        <img src={aboutImg} alt="團隊合照" />
      </section>
      <section className="service">
        <h2 className="title">服務項目</h2>
        {/* Card groups */}
        <div className="service__grid">
          {services.map((item) => {
            return (
              <IconCard
                key={item.enName}
                zhName={item.zhName}
                enName={item.enName}
                brief={item.brief}
              />
            );
          })}
        </div>
        <a href="#" className="cta">
          <span>
            不確定您的問題是否在治療範圍內？參考我們的互動圖表了解更多！
          </span>
        </a>
      </section>
      <section>
        <h2 className="title">就診流程</h2>
        <div>
          <div>
            <span>1</span>
            <p>至醫療院所申請醫師開立的診斷證明、照會或醫囑</p>
          </div>
          <div>
            <span>2</span>
            <p>透過電話或線上預約看診</p>
          </div>
          <div>
            <span>3</span>
            <p>請穿著輕便服裝，並在預約時間前五分鐘抵達</p>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
