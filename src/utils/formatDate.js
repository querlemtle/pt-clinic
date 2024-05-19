// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
// 時區列表：https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
function formatDate(dateStr) {
  const d = new Date(dateStr);
  const formattedDate = new Intl.DateTimeFormat("zh-Hans-TW", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Taipei"
  }).format(d);
  return formattedDate;
}

export default formatDate;
