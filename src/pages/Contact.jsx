import Map from "../components/Map";

export default function Contact() {
  return (
    <main className="main">
      <h2 className="title title--center">交通資訊</h2>
      {/* Map */}
      <section className="contact">
        <div className="contact__grid">
          <Map />
          <ul className="contact__list">
            <li>
              <span className="contact__title">診所資訊</span>
              <ul className="contact__sublist">
                <li>地址：台北市北投區光明路六段80號</li>
                <li>聯絡電話：02-1234-5678</li>
                <li>電子信箱：yuanhengPT@email.com</li>
              </ul>
            </li>
            <li>
              <span className="contact__title">交通方式</span>
              <ul className="contact__sublist">
                <li>
                  捷運：搭乘淡水信義線至北投站下車，從 6 號出口沿光明路步行約 5
                  分鐘即可到達
                </li>
                <li>
                  公車：搭乘承德幹線至大業路下車，沿中山路步行約 300
                  公尺，再右轉光明路步行約 500 公尺
                </li>
                <li>
                  自行開車：可停於北投公園地下停車場（50 元 / 小時），下車後步行 3
                  分鐘即可到達
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
