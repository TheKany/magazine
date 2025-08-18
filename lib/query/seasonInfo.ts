import { supabase } from "../supabase";

const kstToday = () => {
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const y = kst.getUTCFullYear();
  const m = String(kst.getUTCMonth() + 1).padStart(2, "0");
  const d = String(kst.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

export const seasonWeekAllData = async (
  seasonId?: number,
  includeToday = true
) => {
  const today = kstToday();

  let query = supabase
    .from("season_weeks")
    .select("*")
    [includeToday ? "gte" : "gt"]("date", today)
    .order("date", { ascending: true });

  if (seasonId !== undefined) {
    query = query.eq("season_id", seasonId);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

export const seasonThisWeekData = async () => {
  const todayStr = kstToday();
  const [y, m, d] = todayStr.split("-").map(Number);
  const todayDate = new Date(Date.UTC(y, m - 1, d));

  const day = todayDate.getUTCDay();
  const deltaToSaturday = (6 - day + 7) % 7;

  const saturdayDate = new Date(todayDate);
  saturdayDate.setUTCDate(todayDate.getUTCDate() + deltaToSaturday);

  const saturdayStr = [
    saturdayDate.getUTCFullYear(),
    String(saturdayDate.getUTCMonth() + 1).padStart(2, "0"),
    String(saturdayDate.getUTCDate()).padStart(2, "0"),
  ].join("-");

  const { data, error } = await supabase
    .from("season_weeks")
    .select("*")
    .eq("date", saturdayStr)
    .limit(1)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
};
