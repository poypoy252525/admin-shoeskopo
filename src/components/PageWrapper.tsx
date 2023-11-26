import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  return <Box p={10}>{children}</Box>;
};

export default PageWrapper;
