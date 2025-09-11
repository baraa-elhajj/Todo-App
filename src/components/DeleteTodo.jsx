import { IconButton, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useTodo } from "@/contexts/TodoContext";

export default function DeleteTodo({ id }) {
  const [loading, setLoading] = useState(false);
  const { deleteTodo } = useTodo();

  const handleDelete = async () => {
    setLoading(true);
    setTimeout(() => {
      deleteTodo(id);
      setLoading(false);
    }, 1000);
  };

  return (
    <IconButton rounded="full" bgColor="blue.400" onClick={handleDelete}>
      {loading ? <Spinner size="sm" /> : <FiTrash2 />}
    </IconButton>
  );
}
