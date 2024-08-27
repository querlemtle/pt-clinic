"use client";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";

const clinicInfo = [
  "地址：台北市北投區光明路六段80號",
  "聯絡電話：02-1234-5678",
  "電子信箱：yuanhengPT@email.com"
];

const transportation = [
  "捷運：搭乘淡水信義線至北投站下車，從 6 號出口沿光明路步行約 5 分鐘即可到達",
  "公車：搭乘承德幹線至大業路下車，沿中山路步行約 300 公尺，再右轉光明路步行約 500 公尺",
  "自行開車：可停於北投公園地下停車場（50 元 / 小時），下車後步行 3 分鐘即可到達"
];

const Map = dynamic(() => import("@/components/Map"), {
  loading: () => <p>地圖載入中...</p>,
  ssr: false
});

export default function Contact() {
  return (
    <main className="main">
      <section className="contact">
        {/* Map */}
        <h2 className="title title--center">
          <span className="title__deco">交通資訊</span>
        </h2>
        <div className="contact__grid">
          <Map zoom={18} />
          <ul className="contact__list">
            <li>
              <span className="contact__title">診所資訊</span>
              <ul className="contact__sublist">
                {clinicInfo.map((info, i) => {
                  return <li key={i}>- {info}</li>;
                })}
              </ul>
            </li>
            <li>
              <span className="contact__title">交通方式</span>
              <ul className="contact__sublist">
                {transportation.map((method, i) => {
                  return <li key={i}>- {method}</li>;
                })}
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

Map.propTypes = {
  zoom: PropTypes.number.isRequired
};
