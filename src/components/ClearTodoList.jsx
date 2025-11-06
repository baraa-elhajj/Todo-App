import { useTodo } from "@/contexts/TodoContext";
import {
  Button,
  CloseButton,
  Dialog,
  Flex,
  Input,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ClearTodoList() {
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const { clearTodoList } = useTodo();

  const handleClear = () => {
    setLoading(true);
    setTimeout(() => {
      clearTodoList();
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Flex>
            <Button color="white" bgColor="red.500" px="4" h="45" mt="4">
              Clear All
            </Button>
          </Flex>
        </Dialog.Trigger>

        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content
              style={{
                width: "90%",
              }}
            >
              <Dialog.Header>
                <Dialog.Title color="blue.400">Clear all tasks?</Dialog.Title>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Header>
              <Dialog.Body>
                <VStack spacing="3" align="stretch">
                  <Input
                    colorPalette="blue"
                    placeholder='Write "CONFIRM" to clear all the tasks'
                    borderColor="blue.100"
                    variant="outline"
                    onClick={(e) => e.stopPropagation()}
                    mb="2"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    disabled={loading}
                  />
                </VStack>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button color="white" bgColor="blue.400">
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>
                <Button
                  color="white"
                  bgColor="red.500"
                  px={6}
                  onClick={handleClear}
                  loading={loading}
                  loadingText="Clearing"
                  disabled={loading || inputText !== "CONFIRM"}
                >
                  Clear
                </Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
}
