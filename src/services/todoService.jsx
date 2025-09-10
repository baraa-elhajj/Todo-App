import { toaster } from "@/components/ui/toaster";
import supabase from "@/supabase-client";

export const fetchTodoListDB = async () => {
  const { data, error } = await supabase.from("todo").select("*");

  if (error) {
    console.log("Error fetching todo list: ", error);
    toaster.create({
      title: "Failed to fetch todo list.",
      type: "error",
    });
  } else {
    return data;
  }
};

export const addTodoDB = async (text) => {
  const { data, error } = await supabase
    .from("todos")
    .insert([{ text }])
    .single();

  if (error) {
    console.log("Error adding todo: ", error);
    toaster.create({
      title: "Failed to add todo.",
      type: "error",
    });
  } else {
    return data;
  }
};

/**
 *
 * @param {*} id the id of the todo to be deleted
 * @returns new todo list after deleting the todo with the selected id
 */
export const deleteTodoDB = async (id) => {
  const { data, error } = await supabase
    .from("todos")
    .delete()
    .eq("id", id)
    .select("*");

  if (error) {
    console.log("Error deleting todo: ", error);
    toaster.create({
      title: "Failed to delete todo.",
      type: "error",
    });
  } else {
    return data;
  }
};
