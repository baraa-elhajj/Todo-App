import { useTodo } from "@/contexts/TodoContext";
import { HStack, IconButton, Input, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FiCheck, FiEdit2, FiX } from "react-icons/fi";

export default function EditTodo({ todo }) {
  const { editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    setTimeout(() => {
      if (newText.trim() && newText !== todo.text) {
        editTodo(todo.id, newText);
      }
      setIsEditing(false);
      setLoading(false);
    }, 1000);
  };

  if (isEditing) {
    return (
      <HStack>
        <Input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          autoFocus
        />
        <IconButton
          aria-label="Save"
          rounded="full"
          bgColor="blue.400"
          onClick={handleSave}
        >
          {loading ? <Spinner size="sm" /> : <FiCheck />}
        </IconButton>
        <IconButton
          aria-label="Cancel"
          rounded="full"
          bgColor="blue.400"
          onClick={() => {
            setIsEditing(false);
            setNewText(todo.text);
          }}
        >
          <FiX />
        </IconButton>
      </HStack>
    );
  }

  return (
    <HStack>
      <IconButton
        aria-label="Edit"
        rounded="full"
        bgColor="blue.400"
        onClick={() => setIsEditing(true)}
      >
        <FiEdit2 />
      </IconButton>
    </HStack>
  );
}
