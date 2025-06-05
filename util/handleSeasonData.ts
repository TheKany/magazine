const SEASON_DATA = [
  {
    startDate: '2025-06-02',
    isSeason: true
  }
];

export const handleSeasonData = () => {
  const result: {
    name: string;
    date: string;
    isFinish: boolean;
    isNowGame: boolean;
  }[] = [];

  const { startDate, isSeason } = SEASON_DATA[0];
  const start = new Date(startDate);
  const now = new Date();

  const phases = isSeason
    ? [
        { name: '프리시즌', count: 2 },
        { name: '시즌 전반기', count: 3 },
        { name: '이벤트', count: 1 },
        { name: '시즌 후반기', count: 3 }
      ]
    : Array(9).fill({ name: '비시즌', count: 1 });

  let week = 0;

  for (const phase of phases) {
    for (let i = 0; i < phase.count; i++) {
      const gameDate = new Date(start);
      gameDate.setDate(start.getDate() + week * 7 + 6);
      gameDate.setHours(0, 0, 0, 0);

      const weekStart = new Date(gameDate);
      weekStart.setDate(gameDate.getDate() - 5);

      const weekEnd = new Date(gameDate);
      weekEnd.setDate(gameDate.getDate() + 1);

      const isNowGame = now >= weekStart && now <= weekEnd;
      const isFinish = now > gameDate;

      const formattedDate = gameDate.toISOString().slice(5, 10);

      result.push({
        name: phase.name,
        date: formattedDate,
        isFinish,
        isNowGame
      });

      week++;
    }
  }

  return result;
};
