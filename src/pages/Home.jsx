import { flowerOnBack as bannerImg, medTeam as aboutImg } from "@/assets/images";
import IconCard from "@/components/IconCard";
import StepCard from "@/components/StepCard";
import NewsCard from "@/components/NewsCard";
import formatDate from "@/utils/formatDate";
import services from "@/data/services";
import steps from "@/data/steps";
import news from "@/data/news";
import { Link } from "react-router-dom";

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
      {/* About */}
      <section className="about">
        <div className="about__context">
          <h2 className="title">關於我們</h2>
          <p>
            源衡物理治療所是由多位經驗豐富的物理治療師成立，從疾病傷害預防、慢性疼痛、術後復健，我們致力於與患者合作，一同找出疼痛根源；透過個人化的治療方案，希望讓您重獲健康與活力！
          </p>
          <Link to="/about" className="btn">
            瞭解更多 &#8594;
          </Link>
        </div>
        <img src={aboutImg} alt="團隊合照" />
      </section>
      {/* Service */}
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
      {/* Steps */}
      <section className="steps">
        <h2 className="title">就診流程</h2>
        <div className="steps__grid">
          {steps.map((step) => {
            return (
              <StepCard key={step.num} num={step.num} content={step.content} />
            );
          })}
        </div>
      </section>
      {/* News & Info */}
      <section className="topics">
        <div className="news">
          <h2 className="title">最新消息</h2>
          <div className="news__grid">
            {news.map((item) => {
              return (
                <NewsCard
                  key={item.date}
                  date={formatDate(item.date)}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
        <div className="info">
          <h2 className="title">衛教專區</h2>
          <div className="info__grid">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
