import bannerImg from "./../assets/flower-on-back.jpg";
import aboutImg from "./../assets/med-team.jpg";
import IconCard from "../components/IconCard";

export default function Home() {
  return (
    <main className="my-10">
      <section className="mb-14 grid grid-cols-12 grid-rows-1">
        <div className="col-start-2 col-end-8 row-start-1">
          <img src={bannerImg} alt="home page banner" className="rounded-2xl" />
        </div>
        <div className="col-span-5 col-start-6 row-start-1 grid grid-cols-6 mix-blend-multiply">
          <h1 className="col-span-6 text-5xl font-bold leading-relaxed text-primary-600 drop-shadow-sec-900">
            找出疼痛<span className="text-secondary-600">源</span>頭
            <br />
            助您恢復身心平<span className="text-secondary-600">衡</span>
          </h1>
          <h2 className="col-span-full col-start-2 font-bold text-primary-800">
            讓我們的專業團隊協助您定位病痛原因
            <br />
            以最適合的方式改善問題、重拾活力
          </h2>
        </div>
      </section>
      <section className="grid grid-cols-12">
        <div className="col-start-2 col-end-5 flex flex-col items-start gap-y-8">
          <h3 className="text-2xl font-bold text-secondary-700">關於我們</h3>
          <p className="text-primary-900">
            源衡物理治療所是由多位經驗豐富的物理治療師成立，從疾病傷害預防、慢性疼痛、術後復健，我們致力於與患者合作，一同找出疼痛根源；透過個人化的治療方案，希望讓您重獲健康與活力！
          </p>
          <a
            href="#"
            className="rounded-2xl border-2 border-primary-900 px-6 py-3 text-primary-900 transition-all duration-300 ease-out hover:bg-primary-900 hover:text-white"
          >
            瞭解更多 &#8594;
          </a>
        </div>
        <img
          src={aboutImg}
          alt="我們的團隊"
          className="col-start-6 col-end-12 rounded-2xl"
        />
      </section>
      <section className="relative flex flex-col items-center justify-between gap-y-8 bg-wave-deco bg-contain bg-center bg-repeat-x p-10">
        <h3 className="text-2xl font-bold text-secondary-700">服務項目</h3>
        {/* Card groups */}
        <div className="flex w-4/5 justify-around">
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
          className="group rounded-2xl bg-primary-700 px-4 py-2 font-bold text-white shadow-cta-default transition-all duration-300 ease-out hover:shadow-cta-pressed"
        >
          <span className="opacity-90 text-shadow-md active:opacity-100 active:text-shadow-none group-hover:opacity-100 group-hover:text-shadow-none">
            不確定您的問題是否在治療範圍內？參考我們的互動圖表了解更多！
          </span>
        </a>
      </section>
      <section className="flex flex-col items-center gap-y-8">
        <h3 className="text-2xl font-bold text-secondary-700">就診流程</h3>
        <div className="grid grid-cols-3 justify-items-center">
          <div className="before:border-transparent border-2 border-primary-900 text-primary-900">
            <span>1</span>
            <p>至醫療院所申請醫師開立的診斷證明、照會或醫囑</p>
          </div>
          <div className="text-primary-800">
            <span>2</span>
            <p>透過電話或線上預約看診</p>
          </div>
          <div className="text-primary-700">
            <span>3</span>
            <p>請穿著輕便服裝，並在預約時間前五分鐘抵達</p>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
