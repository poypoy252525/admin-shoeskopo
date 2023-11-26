import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  link: string;
}

interface Props {
  items: BreadcrumbItem[];
}

const CustomBreadcrumb = ({ items }: Props) => {
  return (
    <Breadcrumb
      fontSize="sm"
      fontWeight="semibold"
      spacing={1}
      separator={<ChevronRightIcon color="gray.500" />}
      mb={2}
    >
      {items.map((item, index) => (
        <BreadcrumbItem key={index} isCurrentPage={index === items.length - 1}>
          {index === items.length - 1 ? (
            <BreadcrumbLink>{item.label}</BreadcrumbLink>
          ) : (
            <BreadcrumbLink as={Link} to={item.link} color="purple.600">
              {item.label}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
