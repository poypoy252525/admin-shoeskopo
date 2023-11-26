import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import CustomBreadcrumb from "./CustomBreadcrumb";
import { ReactNode } from "react";

interface Props {
  breadcrumbItems: BreadcrumbItem[];
  title: string;
  subtext?: string;
  rightItem?: ReactNode;
}

const PageHead = ({ breadcrumbItems, title, subtext, rightItem }: Props) => {
  return (
    <>
      <CustomBreadcrumb items={breadcrumbItems} />
      <Flex justifyContent="space-between">
        <Box>
          <Heading size="lg">{title}</Heading>
          <Text color="gray.600" fontWeight="semibold">
            {subtext}
          </Text>
        </Box>
        {rightItem}
      </Flex>
    </>
  );
};

export default PageHead;
