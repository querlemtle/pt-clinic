// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#style_shortcuts
// 時區列表：https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
function formatDate(dateStr) {
  const d = new Date(dateStr);
  const formattedDate = new Intl.DateTimeFormat("zh-Hans-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(d);
  return formattedDate;
}

export default formatDate;
