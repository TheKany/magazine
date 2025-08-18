import { supabase } from "../supabase";

export const seasonLeader = async () => {
  const { data, error } = await supabase
    .from("seasons")
    .select("*")
    .neq("id", 0)
    .order("id", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
};
