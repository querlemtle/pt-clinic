"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import HandSvg from "@/components/HandSvg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const idealsList = [
  {
    title: "合作",
    explain: "治療師與患者之間以平等、信任的關係相互討論，一同找出問題解方",
    isActive: true
  },
  {
    title: "全面",
    explain:
      "透過一對一的專業評估與治療，不只對症下藥，而是全方位地分析疾病源頭",
    isActive: false
  },
  {
    title: "精進",
    explain: "診所適時引進新儀器或吸收國內外新技術，提供患者更佳、更多元的選擇",
    isActive: false
  }
];

export default function About() {
  const [ideals, setIdeals] = useState(idealsList[0]);
  const originPicRef = useRef();

  useGSAP(() => {
    gsap.fromTo(originPicRef.current, {
      filter: "blur(10px)",
      opacity: 0
    }, {
      filter: "blur(0)",
      opacity: 1,
      ease: "steps(10)",
      duration: 2.5
    })
  })

  const changeDisplay = (event) => {
    const newIdealIndex = idealsList.findIndex(
      (ideal) => ideal.title === event.target.textContent
    );
    setIdeals(idealsList[newIdealIndex]);
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
          <div className="circle circle--um" onPointerDown={changeDisplay}>
            <span className="ideal__title">合作</span>
          </div>
          <div className="circle circle--bl" onPointerDown={changeDisplay}>
            <span className="ideal__title">全面</span>
          </div>
          <div className="circle circle--br" onPointerDown={changeDisplay}>
            <span className="ideal__title">精進</span>
          </div>
          <div className="ideal__explain">
            <h3 className="ideal__title">{ideals.title}</h3>
            <p className="ideal__context">{ideals.explain}</p>
          </div>
        </div>
      </section>
      {/* feature */}
      <section className="feature">
        <div className="feature__grid">
          <h2 className="title title--feature">本所特色</h2>
          <p className="feature__content">
            環境上，治療所內部均為獨立私人診間，您可以在明亮、整潔、舒適的環境下安心與治療師進行一對一診療。診所配備先進紅外線治療儀、體外震波等儀器輔助治療，促進傷口癒合與減緩疼痛。我們的治療師們皆受過專業訓練與取得相關證照認可，秉持著以人為本的精神傾聽、與個案討論治療目標；另外，對於行動不便出門的患者，我們亦提供到府診察的服務，讓有需求者都能獲得適切的照護。
          </p>
        </div>
      </section>
    </main>
  );
}
