import { Box, HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  subtext: string;
}

const Testimonial = ({ icon, subtext, title }: Props) => {
  return (
    <HStack
      w="100%"
      spacing={3}
      align="flex-start"
      justify="flex-start"
      color="teal"
    >
      <Box>{icon}</Box>
      <Box fontSize="xs" lineHeight={1.7}>
        <Text>{title}</Text>
        <Text>{subtext}</Text>
      </Box>
    </HStack>
  );
};

export default Testimonial;
