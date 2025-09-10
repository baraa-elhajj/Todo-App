// import supabase from "@/supabase-client";
import { IconButton, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { toaster } from "./ui/toaster";
import { useTodo } from "@/contexts/TodoContext";

export default function DeleteTodo({ id }) {
  const [loading, setLoading] = useState(false);
  const { deleteTodo } = useTodo();

  const handleDelete = async () => {
    console.log("DeleteTodo: Deleting todo");
    setLoading(true);
    console.log("DeleteTodo: loading is true");
    // const { _, error } = await supabase
    //   .from("todo")
    //   .delete()
    //   .eq("id", id)
    //   .select("*");

    setTimeout(() => {
      deleteTodo(id);
      toaster.create({
        title: "Todo deleted",
        type: "success",
      });
      setLoading(false);
      console.log("DeleteTodo: loading is false");
    }, 3000);
  };

  return (
    <IconButton rounded="full" bgColor="blue.400" onClick={handleDelete}>
      {loading ? <Spinner size="sm" /> : <FiTrash2 />}
    </IconButton>
  );
}
