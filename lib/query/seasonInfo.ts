import { supabase } from "../supabase";

const kstToday = () => {
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const y = kst.getUTCFullYear();
  const m = String(kst.getUTCMonth() + 1).padStart(2, "0");
  const d = String(kst.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const seasonWeekData = async (seasonId?: number, includeToday = true) => {
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

export default seasonWeekData;
