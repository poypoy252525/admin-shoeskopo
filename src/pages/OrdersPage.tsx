import PageWrapper from "../components/PageWrapper";
import PageHead from "../components/PageHead";
import CustomTable from "../components/CustomTable";
import {
  Avatar,
  HStack,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import orders from "../orders";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CheckIcon, SpinnerIcon } from "@chakra-ui/icons";

const OrdersPage = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", link: "/home" },
    { label: "Orders", link: "/orders" },
  ];

  return (
    <>
      <PageWrapper>
        <PageHead title="Orders" breadcrumbItems={breadcrumbItems} />
      </PageWrapper>
      <CustomTable>
        <Thead>
          <Tr>
            <Th>Order</Th>
            <Th isNumeric>Total</Th>
            <Th>Customer</Th>
            <Th>Status</Th>
            <Th>Payment Method</Th>
            <Th isNumeric>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order, index) => (
            <Tr key={index}>
              <Td py={4}>{order.order}</Td>
              <Td py={4} isNumeric>
                {order.total}
              </Td>
              <Td py={4}>
                <HStack spacing={3}>
                  <Avatar size="sm" name={order.customer} />
                  <Text>{order.customer}</Text>
                </HStack>
              </Td>
              <Td py={4}>
                {(order.status === "Shipped" && (
                  <Tag colorScheme="green" size="sm">
                    <TagLeftIcon as={MdOutlineLocalShipping} />
                    <TagLabel>{order.status}</TagLabel>
                  </Tag>
                )) ||
                  (order.status === "Completed" && (
                    <Tag colorScheme="blue" size="sm">
                      <TagLeftIcon as={CheckIcon} />
                      <TagLabel>{order.status}</TagLabel>
                    </Tag>
                  )) ||
                  (order.status === "Processing" && (
                    <Tag colorScheme="orange" size="sm">
                      <TagLeftIcon as={SpinnerIcon} />
                      <TagLabel>{order.status}</TagLabel>
                    </Tag>
                  ))}
              </Td>
              <Td py={4}>
                {(order.paymentMethod === "Gcash" && (
                  <Tag colorScheme="blue" size="sm">
                    <TagLabel>{order.paymentMethod}</TagLabel>
                  </Tag>
                )) ||
                  (order.paymentMethod === "Paypal" && (
                    <Tag colorScheme="purple" size="sm">
                      <TagLabel>{order.paymentMethod}</TagLabel>
                    </Tag>
                  )) ||
                  (order.paymentMethod === "Cash on delivery" && (
                    <Tag colorScheme="orange" size="sm">
                      <TagLabel>{order.paymentMethod}</TagLabel>
                    </Tag>
                  ))}
              </Td>
              <Td py={4} isNumeric>
                {order.date}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </CustomTable>
    </>
  );
};

export default OrdersPage;
