import Map from "../components/Map";

export default function Contact() {
  return (
    <main className="main">
      <h2 className="title title--center">交通資訊</h2>
      <div className="contact">
        <Map />
        <ul>
          <li>地址：台北市北投區光明路六段80號</li>
          <li>
            大眾運輸
            <ul>
              捷運：搭乘淡水信義線至北投站下車，從 6 號出口沿光明路步行約 800
              公尺
            </ul>
            <ul>
              公車：搭乘承德幹線至大業路下車，沿中山路步行約 300
              公尺，再右轉光明路步行約 500 公尺
            </ul>
          </li>
        </ul>
      </div>
    </main>
  );
}
