import { useTodo } from "@/contexts/TodoContext";
import { Editable, IconButton } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { LuCheck, LuPencilLine, LuX } from "react-icons/lu";

const EditableItem = ({ todo }) => {
  const { editTodo } = useTodo();
  const [todoText, setTodoText] = useState(todo.text);
  const textareaRef = useRef(null);

  const handleSave = (value) => {
    setTodoText(value);
    editTodo(todo.id, value);
  };

  const resizeTextarea = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }
  };

  return (
    <Editable.Root
      value={todoText}
      onClick={resizeTextarea}
      onValueChange={(details) => setTodoText(details.value)}
      onValueCommit={(details) => handleSave(details.value)}
      w="100%"
      p="8px"
      color="blue.400"
      submitMode="enter"
    >
      <Editable.Preview />
      <Editable.Textarea
        ref={textareaRef}
        rows={1}
        style={{
          overflow: "hidden",
          resize: "none",
        }}
      />
      <Editable.Control>
        <Editable.SubmitTrigger asChild>
          <IconButton
            variant="outline"
            size="2xs"
            bgColor="blue.400"
            color="white"
            rounded="full"
          >
            <LuCheck />
          </IconButton>
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable.Root>
  );
};

export default EditableItem;
