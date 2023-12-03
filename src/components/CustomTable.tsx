import { TableContainer, Table } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CustomTable = ({ children }: Props) => {
  return (
    <TableContainer
      bg="white"
      borderY="1px"
      borderColor="gray.300"
      py={3}
      px={4}
    >
      <Table size="sm" variant="simple" color="teal">
        {children}
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
