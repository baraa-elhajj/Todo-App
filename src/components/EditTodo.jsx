import { useTodo } from "@/contexts/TodoContext";
import {
  Button,
  CloseButton,
  Dialog,
  IconButton,
  Input,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { TbEdit } from "react-icons/tb";

export default function EditTodo({ todo }) {
  const { editTodo } = useTodo();
  const [editIndex, setEditIndex] = useState(null);
  const [newTodoText, setNewTodoText] = useState(todo.text);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    setTimeout(() => {
      if (newTodoText.trim() && newTodoText !== todo.text) {
        editTodo(todo.id, newTodoText);
      }
      setEditIndex(null);
      setLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    setEditIndex(null);
    setNewTodoText(todo.text);
  };

  return (
    <Dialog.Root open={editIndex === todo.id}>
      <Dialog.Trigger asChild>
        <IconButton
          rounded="full"
          bgColor="blue.400"
          onClick={() => setEditIndex(todo.id)}
        >
          <TbEdit />
        </IconButton>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title color="blue.400">Edit Todo</Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" onClick={() => handleCancel()} />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body>
              <VStack spacing="3" align="stretch">
                <Input
                  placeholder="What's on your mind?"
                  colorPalette="blue"
                  borderColor="blue.100"
                  variant="outline"
                  value={newTodoText}
                  onChange={(e) => setNewTodoText(e.target.value)}
                  mb="2"
                  disabled={loading}
                />
              </VStack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button
                  color="white"
                  bgColor="blue.400"
                  onClick={() => handleCancel()}
                >
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Button
                color="white"
                bgColor="blue.400"
                onClick={handleSave}
                loading={loading}
                loadingText="Saving"
              >
                Save
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
