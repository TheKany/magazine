import { supabase } from "../supabase";

export const seasonTeam = async () => {
  const { data, error } = await supabase
    .from("season_teams")
    .select("*")
    .eq("season_id", 7);

  if (error) throw new Error(error.message);

  return data;
};
