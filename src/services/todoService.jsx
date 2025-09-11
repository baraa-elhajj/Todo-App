import supabase from "@/supabase-client";

export const fetchTodoListDB = async () => {
  const { data, error } = await supabase.from("todo").select("*");

  if (error) {
    throw error;
  }
  return data;
};

export const addTodoDB = async (text) => {
  const { data, error } = await supabase
    .from("todo")
    .insert([{ text }])
    .single()
    .select();

  if (error) {
    throw error;
  }

  return data;
};

export const deleteTodoDB = async (id) => {
  const { error } = await supabase.from("todo").delete().eq("id", id);

  if (error) {
    throw error;
  }
};

export const clearTodoListDB = async () => {
  const { error } = await supabase.from("todo").delete().neq("id", 0);
  if (error) {
    throw error;
  }
};
