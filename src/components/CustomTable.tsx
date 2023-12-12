import { TableContainer, Table } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  color?: string;
  children: ReactNode;
}

const CustomTable = ({ children, color = "white" }: Props) => {
  return (
    <TableContainer
      bg={color}
      borderY="1px"
      borderColor="gray.300"
      py={3}
      px={4}
      w="100%"
    >
      <Table size="sm" variant="simple" color="teal">
        {children}
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
