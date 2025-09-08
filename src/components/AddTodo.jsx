import { Button, HStack, Input } from "@chakra-ui/react";

export default function AddTodo() {
  return (
    <form>
      <HStack h={45}>
        <Input
          h="100%"
          variant="outline"
          placeholder="What are you up for today?"
          colorPalette="blue"
          w="xs"
        />
        <Button
          size="sm"
          color="white"
          bgColor="blue.500"
          px={10}
          h="100%"
          type="submit"
        >
          Add
        </Button>
      </HStack>
    </form>
  );
}
