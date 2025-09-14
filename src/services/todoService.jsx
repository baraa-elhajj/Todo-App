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

export const updateTodoDB = async (id, newText) => {
  const { data, error } = await supabase
    .from("todo")
    .update({ text: newText })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }
  return data;
};

export const completeTodoDB = async (id, isCompleted) => {
  const { data, error } = await supabase
    .from("todo")
    .update({ isCompleted: isCompleted })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }
  return data;
};
