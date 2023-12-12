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
  Tag,
  TagLeftIcon,
  TagLabel,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CheckIcon, SpinnerIcon } from "@chakra-ui/icons";
import useOrders from "../hooks/useOrders";
import { useNavigate } from "react-router-dom";

const OrdersPage = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", link: "/home" },
    { label: "Orders", link: "/orders" },
  ];
  const navigate = useNavigate();

  const { data: orders } = useOrders();

  return (
    <>
      <PageWrapper>
        <PageHead title="Orders" breadcrumbItems={breadcrumbItems} />
      </PageWrapper>
      {orders?.length ? (
        <CustomTable>
          <Thead>
            <Tr>
              <Th>Order</Th>
              <Th>Customer</Th>
              <Th>Status</Th>
              <Th>Payment Method</Th>
              <Th isNumeric>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders?.map((order, index) => (
              <Tr key={index}>
                <Td py={4}>#{order.order_id}</Td>
                <Td py={4}>
                  <HStack spacing={3}>
                    <Avatar
                      size="sm"
                      name={order.first_name + " " + order.last_name}
                    />
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => navigate("/orders/" + order.order_id)}
                    >
                      {order.first_name + " " + order.last_name}
                    </Button>
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
                  {(order.payment_method === "Gcash" && (
                    <Tag colorScheme="blue" size="sm">
                      <TagLabel>{order.payment_method}</TagLabel>
                    </Tag>
                  )) ||
                    (order.payment_method === "Paypal" && (
                      <Tag colorScheme="purple" size="sm">
                        <TagLabel>{order.payment_method}</TagLabel>
                      </Tag>
                    )) ||
                    (order.payment_method === "Cash on delivery" && (
                      <Tag colorScheme="orange" size="sm">
                        <TagLabel>{order.payment_method}</TagLabel>
                      </Tag>
                    ))}
                </Td>
                <Td py={4} isNumeric>
                  {order.order_date}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </CustomTable>
      ) : (
        <Center w="100%" h="180px">
          <Text color="teal">No data</Text>
        </Center>
      )}
    </>
  );
};

export default OrdersPage;
