import { supabase } from "../supabase";

const seasonWeekData = async (seasonId?: number) => {
  let query = supabase.from("season_weeks").select("*");

  if (seasonId !== undefined) {
    query = query.eq("season_id", seasonId);
  }

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
};

export default seasonWeekData;
