import {
  flowerOnBack as bannerImg,
  medTeam as aboutImg,
  logoBorder
} from "@/assets/images";
import IconCard from "@/components/IconCard";
import StepCard from "@/components/StepCard";
import NewsCard from "@/components/NewsCard";
import FlowSvg from "@/components/FlowSvg";
import WaveSvg from "@/components/WaveSvg";
import formatDate from "@/utils/formatDate";
import services from "@/data/services";
import steps from "@/data/steps";
import news from "@/data/news";
import { Link } from "react-router-dom";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const [tl, setTl] = useState();

  useGSAP(() => {
    const tl = gsap.timeline();
    setTl(tl);
  });

  return (
    <main className="main">
      {/* Key visual */}
      <section className="kv">
        <FlowSvg />
        <div className="kv__grid">
          {/* 封面圖 */}
          <div className="kv__wrapper">
            <img src={bannerImg} alt="首頁宣傳圖" className="kv__pic-color" />
            <img src={bannerImg} alt="首頁宣傳圖" className="kv__pic-bw" />
          </div>
          {/* 標語 */}
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
        </div>
      </section>
      {/* About */}
      <section className="about">
        <div className="about__grid">
          <div className="about__body">
            <img src={logoBorder} alt="logo" className="about__deco" />
            <h2 className="title">關於我們</h2>
            <p className="about__content">
              源衡物理治療所是由多位經驗豐富的物理治療師成立，從疾病傷害預防、慢性疼痛、術後復健，我們致力於與患者合作，一同找出疼痛根源；透過個人化的治療方案，希望讓您重獲健康與活力！
            </p>
            <Link to="/about" className="btn">
              瞭解更多 &#8594;
            </Link>
          </div>
          <div className="about__wrapper">
            <img src={aboutImg} alt="團隊合照" className="about__pic" />
          </div>
        </div>
      </section>
      {/* Service */}
      <section className="service">
        <h2 className="title">服務項目</h2>
        {/* Card groups */}
        <div className="service__grid">
          {services.map((item) => {
            return <IconCard key={item.enName} {...item} />;
          })}
        </div>
        <Link to="/graph" className="cta">
          <span>
            不確定您的問題是否在治療範圍內？參考我們的互動圖表了解更多！
          </span>
        </Link>
        <div className="service__deco">
          <WaveSvg />
        </div>
      </section>
      {/* Steps */}
      <section className="steps">
        <h2 className="title">就診流程</h2>
        <div className="steps__grid">
          {steps.map((step) => {
            return (
              <StepCard
                key={step.num}
                num={step.num}
                content={step.content}
                timeline={tl}
              />
            );
          })}
        </div>
      </section>
      {/* News */}
      <section className="topics">
        <div className="news">
          <h2 className="title">最新消息</h2>
          <div className="news__grid">
            {/* 僅顯示前三項 */}
            {news.slice(0, 3).map((news) => {
              return (
                <NewsCard
                  key={news.date}
                  date={formatDate(news.date)}
                  title={news.title}
                />
              );
            })}
          </div>
          <div className="topics__link">
            <Link to="/news" className="btn">
              查看更多 &#8594;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
