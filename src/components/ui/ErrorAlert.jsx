import { CloseButton } from "@chakra-ui/react";
import { Alert } from "./alert";
import { FiXCircle } from "react-icons/fi";

export default function ErrorAlert({ error, setError }) {
  return (
    <Alert
      title={error}
      icon={<FiXCircle />}
      maxW="35%"
      mx="auto"
      mb="3"
      alignItems="center"
      status="error"
      endElement={
        <CloseButton
          size="sm"
          pos="relative"
          top="-2"
          insetEnd="-2"
          onClick={() => setError(null)}
        />
      }
    />
  );
}
