import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  HStack,
  Button,
  TableCaption,
  Text,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  Badge,
} from "@chakra-ui/react";
import PageHead from "../components/PageHead";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import DeleteProductButton from "../components/DeleteProductButton";
import CustomTable from "../components/CustomTable";

const ProductsPage = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", link: "/home" },
    { label: "Products", link: "/products" },
  ];

  const { data: products } = useProducts();
  return (
    <>
      <PageWrapper>
        <PageHead breadcrumbItems={breadcrumbItems} title="Products" />
        <Box mt={8}>
          <HStack spacing={5}>
            <InputGroup w="auto">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                w="310px"
                bg="white"
                fontSize="small"
                placeholder="Search..."
              />
            </InputGroup>
            <Link to="/products/addproduct">
              <Button fontSize="small" colorScheme="red" leftIcon={<AddIcon />}>
                Add Product
              </Button>
            </Link>
          </HStack>
        </Box>
      </PageWrapper>
      <CustomTable>
        <TableCaption>All Products</TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Name</Th>
            <Th>Brand</Th>
            <Th>Color</Th>
            <Th isNumeric>Price</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products?.map((product, index) => (
            <Tr key={index}>
              <Td maxW="75px">
                <Image
                  w="70px"
                  minH="70px"
                  border="1px"
                  borderColor="gray.300"
                  rounded="lg"
                  p={2}
                  src={
                    "http://localhost/shoeskopo/image.php?url=" +
                    product.image_url
                  }
                />
              </Td>
              <Td>
                <Button variant="link" size="sm" colorScheme="purple">
                  {product.name}
                </Button>
              </Td>
              <Td>
                <Badge variant="subtle" colorScheme="green">
                  {product.brand}
                </Badge>
              </Td>
              <Td fontSize="small" color="gray.500">
                {product.color}
              </Td>
              <Td fontSize="small" color="gray.500" isNumeric>
                <Text color="teal" fontWeight="bold">
                  ₱{parseFloat(product.price).toLocaleString()}
                </Text>
              </Td>
              <Td>
                <HStack spacing={2}>
                  <Link
                    to={"/products/" + product.product_id + "/update-product"}
                  >
                    <Button size="sm" variant="outline" colorScheme="green">
                      Update
                    </Button>
                  </Link>
                  <DeleteProductButton product={product} />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </CustomTable>
    </>
  );
};

export default ProductsPage;
