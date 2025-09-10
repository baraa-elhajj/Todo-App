import { IconButton } from "@chakra-ui/react";
// import supabase from "@/supabase-client";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { toaster } from "./ui/toaster";

export default function DeleteTodo({ id }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    console.log("DeleteTodo: loading is true");
    // const { _, error } = await supabase
    //   .from("todo")
    //   .delete()
    //   .eq("id", id)
    //   .select("*");

    toaster.create({
      title: error || "Todo deleted",
      type: "success",
    });
  };

  return (
    <IconButton
      rounded="full"
      bgColor="blue.400"
      onClick={handleDelete}
      loading={loading}
    >
      <FiTrash2 />
    </IconButton>
  );
}
