"use client";
import { idealList, featureImgs } from "@/data/aboutClinic";
import { useState, useRef } from "react";
import Image from "next/image";
import HandSvg from "@/components/HandSvg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Carousel from "@/components/Carousel";
import { motion } from "framer-motion";

gsap.registerPlugin(useGSAP);

export default function About() {
  const [ideals, setIdeals] = useState(idealList);
  const [displayIdeal, setDisplayIdeal] = useState(() =>
    idealList.find((ideal) => ideal.isActive)
  );
  const originPicRef = useRef();

  const variants = {
    hide: {
      opacity: 0,
      y: -20
    },
    invisible: {
      scale: 0,
      opacity: 0
    },
    enlarge: {
      scale: 1,
      opacity: 1
    },
    slideIn: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn",
        duration: 0.3
      }
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      originPicRef.current,
      {
        filter: "blur(10px)",
        opacity: 0
      },
      {
        filter: "blur(0)",
        opacity: 1,
        ease: "steps(10)",
        duration: 2.5
      }
    );
  });

  const changeDisplay = (event) => {
    const newIdealList = idealList.map((ideal) => {
      return {
        ...ideal,
        isActive: ideal.title === event.target.textContent ? true : false
      };
    });
    setIdeals(newIdealList);
    setDisplayIdeal(() => newIdealList.find((ideal) => ideal.isActive));
  };

  return (
    <main className="main">
      <h2 className="title title--center">
        <span className="title__deco">關於我們</span>
      </h2>
      {/* Origin */}
      <section className="origin">
        <div className="origin__context">
          <h2 className="title">創立源由</h2>
          <p>
            源衡物理治療所是由一群懷抱熱忱與經驗豐富的治療師成立，有感於疼痛與疾病對個人生活可能造成的影響，以及體會到每個人在生理與日常環境上的差異，因此我們致力從關懷、專業、尊重的角度，為每個個案提供合適且個人化的治療服務，期望達成其需求和目標。無論是姿勢問題、慢性疼痛、運動傷害、術後復原等等，治療師們能提供專業分析，與您共同討論出最合適的治療方案，以改善疼痛、重拾健康和活力。除了解決當前問題，我們也重視疼痛預防和自我管理技巧，避免狀況再次發生，或是潛在風險擴大導致新的疾病產生。除此之外，本所亦與其他專業醫事機構合作，對有需要者進行轉介，提供更全面的醫療服務。
          </p>
        </div>
        <div className="origin__wrapper">
          <Image
            width={1280}
            height={1280}
            src="/photos/teamwork-hands.jpg"
            alt="團隊合作"
            className="origin__pic"
            ref={originPicRef}
          />
        </div>
      </section>
      <HandSvg />
      {/* Ideal */}
      <section className="ideal">
        <h2 className="title">核心理念</h2>
        <div className="ideal__grid">
          {ideals.map(({ title, tag, isActive }) => (
            <div
              key={title}
              className={`circle ${tag} ${isActive ? "circle--active" : ""}`}
              onPointerDown={changeDisplay}
            >
              <span className="ideal__title">{title}</span>
            </div>
          ))}
          <div className="ideal__explain">
            <motion.h3
              key={displayIdeal.title}
              variants={variants}
              initial="invisible"
              animate="enlarge"
              className="ideal__title"
            >
              {displayIdeal.title}
            </motion.h3>
            <motion.p
              key={displayIdeal.explain}
              variants={variants}
              initial="hide"
              animate="slideIn"
              className="ideal__context"
            >
              {displayIdeal.explain}
            </motion.p>
          </div>
        </div>
      </section>
      {/* feature */}
      <section className="feature">
        <h2 className="title title--center">本所特色</h2>
        <div className="feature__grid">
          <Carousel imgArr={featureImgs} />
        </div>
      </section>
    </main>
  );
}
