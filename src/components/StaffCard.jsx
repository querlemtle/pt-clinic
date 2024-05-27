import PropTypes from "prop-types";

export default function StaffCard({
  pfp,
  staffName,
  staffTitle,
  staffExperience
}) {
  return (
    <div className="card card--staff">
      <div className="card__pfp">
        <img src={pfp} alt="名字" />
      </div>
      <div className="card__body">
        <div className="card__title">
          <h3>{staffName}</h3>
          <span>{staffTitle}</span>
        </div>
        <div>
          <ul className="card__list">
            <li>
              學經歷
              <ul>
                <li>長庚大學物理治療系學士</li>
                <li>臺灣大學物理治療學系碩士</li>
                <li>中華民國高考合格物理治療師</li>
                <li>安康醫院復健科 物理治療師</li>
              </ul>
            </li>
            <li>
              專業認證
              <ul>
                <li>BSPTS 巴塞隆納脊柱側彎治療 Level 1 認證</li>
                <li>英國 Kinetic Control 課程認證</li>
                <li>美國 NPCP 皮拉提斯認證</li>
              </ul>
            </li>
            <li>
              專長
              <ul>
                <li>PNF 神經誘發訓練</li>
                <li>脊椎疼痛評估與治療</li>
                <li>皮拉提斯訓練</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

StaffCard.propTypes = {
  pfp: PropTypes.string.isRequired,
  staffName: PropTypes.string.isRequired,
  staffTitle: PropTypes.string.isRequired,
  staffExperience: PropTypes.array
};
