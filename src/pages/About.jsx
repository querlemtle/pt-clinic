import { teamwork, treatmentRoom } from "@/assets/images";

export default function About() {
  return (
    <main className="main">
      <section className="grid--origin">
        <div>
          <h2 className="title">緣起</h2>
          <p>
            源衡物理治療所是由一群懷抱熱忱與經驗豐富的治療師成立，我們親身經歷過疼痛與疾病對個人生活的影響，以及體會到每個人在生理與日常環境上的差異，因此致力從關懷、專業、尊重的角度，為每個個案提供合適且個人化的治療服務，期望達成其需求和目標。無論是姿勢問題、慢性疼痛、運動傷害、術後復原等等，治療師們能提供專業分析，與您共同討論出最合適的治療方案，以改善疼痛、重拾健康和活力。除了解決當前問題，我們也重視疼痛預防和自我管理技巧，避免狀況再次發生，或是潛在風險擴大導致新的疾病產生。除此之外，本所亦與其他專業醫事機構合作，對有需要者進行轉介，提供更全面的醫療服務。
          </p>
        </div>
        <div>
          <img src={teamwork} alt="團隊合作" />
        </div>
      </section>
      <section className="grid--ideal">
        <h2 className="title">核心理念</h2>
        <div className="circle">合作</div>
        <div className="circle">全面</div>
        <div className="circle">精進</div>
      </section>
      <section className="grid--feature">
        <div>
          <img src={treatmentRoom} alt="治療所環境" />
        </div>
        <div>
          <h2 className="title">本所特色</h2>
          <p>
            環境上，治療所內部均為獨立私人診間，您可以在明亮、整潔、舒適的環境下安心與治療師進行一對一診療。診所配備先進紅外線治療儀、體外震波等儀器輔助治療，促進傷口癒合與減緩疼痛。我們的治療師們皆受過專業訓練與取得相關證照認可，秉持著以人為本的精神傾聽、與個案討論治療目標；另外，對於行動不便出門的患者，我們亦提供到府診察的服務，讓有需求者都能獲得適切的照護。
          </p>
        </div>
      </section>
    </main>
  );
}
