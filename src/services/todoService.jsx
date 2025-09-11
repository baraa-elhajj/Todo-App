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

/**
 *
 * @param {*} id the id of the todo to be deleted
 * @returns new todo list after deleting the todo with the selected id
 */
export const deleteTodoDB = async (id) => {
  const { data, error } = await supabase
    .from("todo")
    .delete()
    .eq("id", id)
    .select("*");

  if (error) {
    throw error;
  }
  return data;
};
