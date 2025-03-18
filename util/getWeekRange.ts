export const getWeekRange = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const firstDay = new Date(today);
  firstDay.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1)); // 월요일 찾기
  firstDay.setHours(0, 0, 0, 0);

  const lastDay = new Date(firstDay);
  lastDay.setDate(firstDay.getDate() + 6); // 일요일 찾기
  lastDay.setHours(23, 59, 59, 999);

  return { firstDay, lastDay };
};
