import { IconButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <IconButton
      onClick={handleClick}
      position="fixed"
      bottom="20px"
      right="20px"
      bgColor="blue.400"
      aria-label="Scroll to top"
      borderRadius="full"
      boxShadow="md"
      zIndex="50"
    >
      <HiArrowNarrowUp />
    </IconButton>
  );
}
