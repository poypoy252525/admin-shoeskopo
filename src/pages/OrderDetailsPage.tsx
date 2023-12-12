import PageWrapper from "../components/PageWrapper";
import PageHead from "../components/PageHead";
import {
  Image,
  Button,
  Grid,
  GridItem,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Card,
  CardBody,
  Heading,
  HStack,
  Divider,
  VStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import CustomTable from "../components/CustomTable";
import Testimonial from "../components/Testimonial";
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineHome } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import CustomFormControlSelect from "../components/CustomFormControlSelect";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import CustomBreadcrumb from "../components/CustomBreadcrumb";
import useOrderItem from "../hooks/useOrderItem";
import useImage from "../hooks/useImage";
import useUpdateStatusOrder from "../hooks/useUpdateStatusOrder";

const OrderDetailsPage = () => {
  const { id } = useParams();

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", link: "/home" },
    { label: "Orders", link: "/orders" },
    { label: "Order #" + id, link: "/orders/" + id },
  ];
  const { data: orderItem } = useOrderItem(parseInt(id!));
  const { handleSubmit, setValue, register } = useForm<{ status: string }>();
  const { mutate } = useUpdateStatusOrder();

  return (
    <form
      onSubmit={handleSubmit((order) =>
        mutate({ order_id: parseInt(id!), status: order.status })
      )}
    >
      <PageWrapper>
        <CustomBreadcrumb items={breadcrumbItems} />
        <PageHead title={"Order #" + id} />
        <Text color="teal">
          Customer ID :
          <Button variant="link">
            {orderItem && orderItem[0].customer_id}
          </Button>
        </Text>
        <Grid templateColumns="repeat(12, 1fr)" mt={6} gap={8}>
          <GridItem colSpan={8}>
            <VStack align="flex-start" spacing={6}>
              <CustomTable>
                <Thead>
                  <Tr>
                    <Th minW="70px"></Th>
                    <Th w="50%">Products</Th>
                    <Th>Color</Th>
                    <Th>Brand</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {orderItem?.map((item, index) => (
                    <Tr key={index}>
                      <Td minW="60px">
                        <Image
                          w="58px"
                          minH="58px"
                          border="1px"
                          borderColor="gray.300"
                          rounded="lg"
                          p={2}
                          src={useImage(item.image_url)}
                        />
                      </Td>
                      <Td w="50%">{item.name}</Td>
                      <Td>{item.color}</Td>
                      <Td>{item.brand}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </CustomTable>
              <Box w="100%">
                <Heading size="md" mb={3}>
                  Shipping Details
                </Heading>
                <Grid w="100%" templateColumns="repeat(3, 1fr)" gap={5}>
                  <GridItem>
                    <Testimonial
                      icon={<Icon as={FiUser} mt={1} w="16px" h="16px" />}
                      title="Customer"
                      subtext={
                        orderItem
                          ? orderItem[0].first_name +
                            " " +
                            orderItem[0].last_name
                          : ""
                      }
                    />
                  </GridItem>
                  <GridItem>
                    <Testimonial
                      icon={
                        <Icon as={MdOutlineEmail} mt={1} w="16px" h="16px" />
                      }
                      title="Email"
                      subtext={orderItem ? orderItem[0].email : ""}
                    />
                  </GridItem>
                  <GridItem>
                    <Testimonial
                      icon={
                        <Icon as={HiOutlinePhone} mt={1} w="16px" h="16px" />
                      }
                      title="Phone"
                      subtext={
                        orderItem ? orderItem[0].phone_number.toString() : ""
                      }
                    />
                  </GridItem>
                  <GridItem>
                    <Testimonial
                      icon={
                        <Icon as={MdOutlineHome} mt={1} w="16px" h="16px" />
                      }
                      title="Address"
                      subtext={orderItem ? orderItem[0].address : ""}
                    />
                  </GridItem>
                </Grid>
              </Box>
            </VStack>
          </GridItem>
          <GridItem colSpan={4}>
            <VStack align="flex-start" spacing={6}>
              <Card w="100%">
                <CardBody>
                  <Heading size="md" mb={5}>
                    Summary
                  </Heading>
                  <VStack align="flex-start" spacing={2}>
                    <HStack justify="space-between" w="100%">
                      <Text fontWeight="semibold" color="teal">
                        Subtotal :
                      </Text>
                      <Text fontWeight="bold" color="teal">
                        ₱
                        {orderItem
                          ?.reduce(
                            (acc, value) =>
                              acc + parseFloat(value.price) * value.quantity,
                            0
                          )
                          .toLocaleString()}
                      </Text>
                    </HStack>
                    <HStack justify="space-between" w="100%">
                      <Text fontWeight="semibold" color="teal">
                        Shipping fee :
                      </Text>
                      <Text fontWeight="bold" color="teal">
                        ₱30
                      </Text>
                    </HStack>
                  </VStack>
                  <Divider my={4} />
                  <HStack justify="space-between" w="100%">
                    <Text fontSize="xl" fontWeight="semibold">
                      Total :
                    </Text>
                    <Text fontSize="xl" fontWeight="bold" color="red.400">
                      ₱
                      {orderItem
                        ?.reduce(
                          (acc, value) =>
                            acc + parseFloat(value.price) * value.quantity,
                          30
                        )
                        .toLocaleString()}
                    </Text>
                  </HStack>
                </CardBody>
              </Card>
              <Card w="100%">
                <CardBody>
                  <Heading size="md" mb={5}>
                    Order Status
                  </Heading>
                  <VStack spacing={4}>
                    <CustomFormControlSelect
                      defaultValue={orderItem && orderItem[0].status}
                      setValue={(value) => setValue("status", value!)}
                      items={["Shipped", "Completed", "Processing"]}
                      label="Order Status"
                      register={register("status")}
                    />
                    <Button w="100%" colorScheme="red" type="submit">
                      Save changes
                    </Button>
                  </VStack>
                </CardBody>
              </Card>
            </VStack>
          </GridItem>
        </Grid>
      </PageWrapper>
    </form>
  );
};

export default OrderDetailsPage;
