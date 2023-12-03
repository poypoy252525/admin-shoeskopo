import { Flex, Heading } from "@chakra-ui/react";
import ProfilePopover from "./ProfilePopover";

const Navbar = () => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        h="64px"
        borderBottom="1px"
        borderColor="gray.300"
        position="fixed"
        top={0}
        left={0}
        w="100%"
        bg="white"
        px={5}
      >
        <Heading size="md">Shoes ko po!</Heading>
        <ProfilePopover />
      </Flex>
    </>
  );
};

export default Navbar;
