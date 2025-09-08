import { IconButton } from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";

export default function DeleteTodo() {
  return (
    <IconButton rounded="full" bgColor="blue.400">
      <FiTrash2 />
    </IconButton>
  );
}
