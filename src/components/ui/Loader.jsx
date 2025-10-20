import { Box, Heading, Spinner } from "@chakra-ui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loader() {
  return (
    <>
      <Box w={{ base: "100%", md: "40%" }} h="auto" mx="auto">
        <DotLottieReact
          src="https://lottie.host/1d57a315-e7df-4284-b98f-11271d96febf/Mlv6dHYkpZ.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Heading mt={15} p={5} fontWeight="extrabold" size="xl" color="blue.400">
        Fetching todo list <Spinner />
      </Heading>
    </>
  );
}
