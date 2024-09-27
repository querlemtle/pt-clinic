"use client";
import Image from "next/image";
import formatDate from "@/utils/formatDate";
import IconCard from "@/components/IconCard";
import StepCard from "@/components/StepCard";
import NewsCard from "@/components/NewsCard";
import FlowSvg from "@/components/FlowSvg";
import WaveSvg from "@/components/WaveSvg";
import services from "@/data/services";
import steps from "@/data/steps";
import Link from "next/link";
import PropTypes from "prop-types";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home({ news }) {
  const gsapContainer = useRef();
  const titleTl = useRef();
  const titleRef = useRef();
  const subTitleRef = useRef();
  const bwPicRef = useRef();
  const svcRef = useRef();
  const stepsRef = useRef();
  const newsRef = useRef([]);
  const iconCardsRef = useRef([]);
  const stepCardsRef = useRef([]);

  useGSAP(
    () => {
      titleTl.current = gsap
        .timeline()
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0
          }
        )
        .fromTo(
          subTitleRef.current,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0
          }
        )
        .fromTo(
          bwPicRef.current,
          {
            clipPath: "polygon(1% 0, 100% 0, 100% 100%, 1% 100%)"
          },
          {
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
          }
        );

      iconCardsRef.current.forEach((el, i) =>
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 100
          },
          {
            opacity: 1,
            y: 0,
            stagger: function (order) {
              order = i;
              return order * 0.1;
            },
            scrollTrigger: {
              trigger: svcRef.current,
              start: "top top",
              end: "50% 50%",
            },
            ease: "none"
          }
        )
      );

      stepCardsRef.current.forEach((el, i) =>
        gsap.fromTo(
          el,
          {
            filter: "blur(4px)",
            x: -20,
            opacity: 0
          },
          {
            filter: "blur(0)",
            x: 0,
            opacity: 1,
            stagger: function (order) {
              order = i;
              return order * 0.3;
            },
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "20% 20%"
            }
          }
        )
      );
    },
    { scope: gsapContainer }
  );

  return (
    <main className="main" ref={gsapContainer}>
      {/* Key visual */}
      <section className="kv">
        <FlowSvg />
        <div className="kv__grid">
          {/* 封面圖 */}
          <div className="kv__wrapper">
            <Image
              width={1920}
              height={1277}
              src="/photos/flower-on-back.jpg"
              alt="首頁宣傳圖"
              className="kv__pic-color"
              priority={true}
            />
            <Image
              width={1920}
              height={1277}
              src="/photos/flower-on-back.jpg"
              alt="首頁宣傳圖"
              className="kv__pic-bw"
              ref={bwPicRef}
            />
          </div>
          {/* 標語 */}
          <div className="kv__slogan">
            <h1 className="kv__title" ref={titleRef}>
              找出疼痛<span className="kv__accent">源</span>頭
              <br />
              助您恢復身心平<span className="kv__accent">衡</span>
            </h1>
            <h3 className="kv__subtitle" ref={subTitleRef}>
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
            <Image
              fill
              src="/icons/logo-border.svg"
              alt="logo"
              className="about__deco"
            />
            <h2 className="title">關於我們</h2>
            <p className="about__content">
              源衡物理治療所是由多位經驗豐富的物理治療師成立，從疾病傷害預防、慢性疼痛、術後復健，我們致力於與患者合作，一同找出疼痛根源；透過個人化的治療方案，希望讓您重獲健康與活力！
            </p>
            <Link href="/about" className="btn">
              瞭解更多 &#8594;
            </Link>
          </div>
          <div className="about__wrapper">
            <Image
              width={1920}
              height={1280}
              src="/photos/med-team.jpg"
              alt="團隊合照"
              className="about__pic"
            />
          </div>
        </div>
      </section>
      {/* Service */}
      <section className="service" ref={svcRef}>
        <h2 className="title">服務項目</h2>
        {/* Card groups */}
        <div className="service__grid">
          {services.map((item, i) => {
            return (
              <IconCard
                ref={(el) => (iconCardsRef.current[i] = el)}
                key={item.enName}
                {...item}
              />
            );
          })}
        </div>
        <Link href="/graph" className="cta">
          <span>
            不確定您的問題是否在治療範圍內？參考我們的互動圖表了解更多！
          </span>
        </Link>
        <div className="service__deco">
          <WaveSvg />
        </div>
      </section>
      {/* Steps */}
      <section className="steps" ref={stepsRef}>
        <h2 className="title">就診流程</h2>
        <div className="steps__grid">
          {steps.map((step, i) => {
            return (
              <StepCard
                ref={(el) => (stepCardsRef.current[i] = el)}
                key={step.num}
                num={step.num}
                content={step.content}
              />
            );
          })}
        </div>
      </section>
      {/* News */}
      <section className="topics">
        <div className="news" ref={newsRef}>
          <h2 className="title">最新消息</h2>
          <div className="news__grid">
            {/* 僅顯示前三項 */}
            {news.slice(0, 3).map((news, i) => {
              return (
                <NewsCard
                  key={news.date}
                  id={news.id}
                  date={formatDate(news.date)}
                  title={news.title}
                />
              );
            })}
          </div>
          <div className="topics__link">
            <Link href="/news" className="btn">
              查看更多 &#8594;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

Home.propTypes = {
  news: PropTypes.array,
};
