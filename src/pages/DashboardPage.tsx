import { Navigate } from "react-router-dom";
import PageHead from "../components/PageHead";
import PageWrapper from "../components/PageWrapper";
import useAuth from "../hooks/useAuth";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import graph from "../assets/Screenshot 2023-12-02 154850.png";

const DashboardPage = () => {
  const user = useAuth();
  if (!user) return <Navigate to="/login" />;
  return (
    <PageWrapper>
      <PageHead title="Dashboard" />
      <Box mt={8}>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem>
            <Card h="120px" bg="skyblue">
              <CardBody>
                <HStack spacing={4} h="100%" align="center">
                  <Icon as={FaUser} color="white" boxSize="68px" />
                  <Box lineHeight="1">
                    <Text fontWeight="bold" fontSize="48px" color="white">
                      19
                    </Text>
                    <Text
                      ms={2}
                      fontWeight="semibold"
                      color="white"
                      fontSize="16px"
                    >
                      Users
                    </Text>
                  </Box>
                </HStack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card h="120px" bg="yellow.400">
              <CardBody>
                <HStack spacing={4} h="100%" align="center">
                  <Icon as={GiRunningShoe} color="white" boxSize="68px" />
                  <Box lineHeight="1">
                    <Text fontWeight="bold" fontSize="48px" color="white">
                      78
                    </Text>
                    <Text fontWeight="semibold" color="white" fontSize="16px">
                      Products
                    </Text>
                  </Box>
                </HStack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card h="120px" bg="pink.300">
              <CardBody>
                <HStack spacing={4} h="100%" align="center">
                  <Icon as={FaShoppingCart} color="white" boxSize="68px" />
                  <Box lineHeight="1">
                    <Text fontWeight="bold" fontSize="48px" color="white">
                      21
                    </Text>
                    <Text fontWeight="semibold" color="white" fontSize="16px">
                      Orders
                    </Text>
                  </Box>
                </HStack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card h="120px" bg="green.500">
              <CardBody>
                <HStack spacing={4} h="100%" align="center">
                  <Icon as={FaTruckFast} color="white" boxSize="68px" />
                  <Box lineHeight="1">
                    <Text fontWeight="bold" fontSize="48px" color="white">
                      23
                    </Text>
                    <Text fontWeight="semibold" color="white" fontSize="16px">
                      Shipped
                    </Text>
                  </Box>
                </HStack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem colSpan={4}>
            <Image w="100%" src={graph} />
          </GridItem>
        </Grid>
      </Box>
    </PageWrapper>
  );
};

export default DashboardPage;
