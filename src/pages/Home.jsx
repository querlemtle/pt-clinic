import bannerImg from "./../assets/flower-on-back.jpg";
import aboutImg from "./../assets/med-team.jpg";
import IconCard from "../components/IconCard";

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <img src={bannerImg} alt="home page banner" />
        </div>
        <div>
          <h1>
            找出疼痛<span>源</span>頭
            <br />
            助您恢復身心平<span>衡</span>
          </h1>
          <h2>
            讓我們的專業團隊協助您定位病痛原因
            <br />
            以最適合的方式改善問題、重拾活力
          </h2>
        </div>
      </section>
      <section>
        <div>
          <h3>關於我們</h3>
          <p>
            源衡物理治療所是由多位經驗豐富的物理治療師成立，從疾病傷害預防、慢性疼痛、術後復健，我們致力於與患者合作，一同找出疼痛根源；透過個人化的治療方案，希望讓您重獲健康與活力！
          </p>
          <a
            href="#"
          >
            瞭解更多 &#8594;
          </a>
        </div>
        <img
          src={aboutImg}
          alt="我們的團隊"
        />
      </section>
      <section>
        <h3>服務項目</h3>
        {/* Card groups */}
        <div>
          <IconCard
            zhName={"運動治療"}
            enName={"Therapeutic Exercise"}
            brief={
              "透過專業治療師評估、配合先進儀器測試，一對一為您量身訂做專屬的運動治療套餐"
            }
          />
          <IconCard
            zhName={"運動治療"}
            enName={"Therapeutic Exercise"}
            brief={
              "透過專業治療師評估、配合先進儀器測試，一對一為您量身訂做專屬的運動治療套餐"
            }
          />
          <IconCard
            zhName={"運動治療"}
            enName={"Therapeutic Exercise"}
            brief={
              "透過專業治療師評估、配合先進儀器測試，一對一為您量身訂做專屬的運動治療套餐"
            }
          />
          <IconCard
            zhName={"運動治療"}
            enName={"Therapeutic Exercise"}
            brief={
              "透過專業治療師評估、配合先進儀器測試，一對一為您量身訂做專屬的運動治療套餐"
            }
          />
        </div>
        <a
          href="#"
        >
          <span>
            不確定您的問題是否在治療範圍內？參考我們的互動圖表了解更多！
          </span>
        </a>
      </section>
      <section>
        <h3>就診流程</h3>
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
