import { IconButton, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useTodo } from "@/contexts/TodoContext";

export default function DeleteTodo({ id }) {
  const [loading, setLoading] = useState(false);
  const { deleteTodo } = useTodo();

  const handleDelete = async (e) => {
    e.stopPropagation();
    setLoading(true);
    setTimeout(() => {
      deleteTodo(id);
      setLoading(false);
    }, 1000);
  };

  return (
    <IconButton
      rounded="full"
      bgColor="transparent"
      color="red.400"
      onClick={handleDelete}
      _hover={{ color: "red.500" }}
    >
      {loading ? <Spinner size="sm" /> : <FiTrash2 />}
    </IconButton>
  );
}
