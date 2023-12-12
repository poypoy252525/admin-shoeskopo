import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import PageWrapper from "../components/PageWrapper";
import CustomFormControlInput from "../components/CustomFormControlInput";
import CustomFormControlSelect from "../components/CustomFormControlSelect";
import { useForm } from "react-hook-form";
import PageHead from "../components/PageHead";
import { Link, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import useUpdateProduct from "../hooks/useUpdateProduct";
import { useEffect } from "react";

const UpdateProductPage = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", link: "/home" },
    { label: "Products", link: "/products" },
    { label: "Update Product", link: "/products/update-product" },
  ];

  const { id } = useParams();

  const { data: product } = useProduct(id!);
  const { register, handleSubmit, setValue } = useForm<Product>();
  const { mutate } = useUpdateProduct();

  useEffect(() => {
    setValue("price", product?.price || "-1");
    setValue("color", product?.color || "NaN");
  }, [product?.price, product?.color]);
  return (
    <form
      onSubmit={handleSubmit((product) => {
        const formData = new FormData();
        formData.append("id", id || "NaN");
        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("category", product.category);
        formData.append("color", product.color);
        formData.append("brand", product.brand);
        formData.append("price", product.price.toString());
        formData.append("featured_player", product.featured_player);
        formData.append("image", product.image_url[0]);
        mutate(formData);
      })}
      encType="multipart/form-data"
    >
      <PageWrapper>
        <PageHead
          breadcrumbItems={breadcrumbItems}
          subtext="The data you save will modify in database"
          title="Update Product"
          rightItem={
            <HStack>
              <Link to="/products">
                <Button fontSize="small" variant="outline" colorScheme="red">
                  Discard
                </Button>
              </Link>
              <Button fontSize="small" colorScheme="red" type="submit">
                Save changes
              </Button>
            </HStack>
          }
        />
        <Grid templateColumns="repeat(12, 1fr)" mt={6} gap={8}>
          <GridItem colSpan={8}>
            <VStack align="flex-start" w="100%" spacing={8}>
              <CustomFormControlInput
                setValue={() => setValue("name", product?.name || "NaN")}
                defaultValue={product?.name}
                label="Product Name"
                placeholder="Write name here..."
                register={register("name")}
              />
              <CustomFormControlInput
                setValue={() =>
                  setValue("description", product?.description || "NaN")
                }
                defaultValue={product?.description}
                label="Product Description"
                placeholder="Write a description here..."
                isTextArea
                register={register("description")}
              />
              <Box w="100%">
                <FormControl>
                  <FormLabel fontSize="large" m={0}>
                    <Text mb={2}>Display Images</Text>
                    <Center
                      border="1px"
                      borderColor="red.200"
                      borderStyle="dashed"
                      w="100%"
                      h={40}
                      rounded="md"
                      cursor="pointer"
                      color="purple.600"
                      fontSize="md"
                    >
                      Browse from device
                    </Center>
                  </FormLabel>
                  <Input
                    {...register("image_url")}
                    type="file"
                    display="none"
                    accept="image/*"
                  />
                </FormControl>
              </Box>
            </VStack>
          </GridItem>
          <GridItem colSpan={4}>
            <VStack spacing={5}>
              <Card variant="outline" w="100%">
                <CardBody>
                  <Heading size="md" mb={5}>
                    Organize
                  </Heading>
                  <VStack spacing={4}>
                    <CustomFormControlSelect
                      setValue={() =>
                        setValue("category", product?.category || "Nan")
                      }
                      defaultValue={product?.category}
                      items={["Men", "Women", "Unisex"]}
                      label="Category"
                      register={register("category")}
                    />
                    <CustomFormControlSelect
                      setValue={() =>
                        setValue(
                          "featured_player",
                          product?.featured_player || "NaN"
                        )
                      }
                      defaultValue={product?.featured_player}
                      items={["Lebron James", "Stephen Curry", "Kobe Bryant"]}
                      label="Featured Player"
                      register={register("featured_player")}
                    />
                    <FormControl isRequired>
                      <FormLabel>Price</FormLabel>
                      <Input
                        defaultValue={product?.price}
                        type="number"
                        placeholder="Write price here..."
                        fontSize="small"
                        {...register("price")}
                      />
                    </FormControl>
                  </VStack>
                </CardBody>
              </Card>
              <Card variant="outline" w="100%">
                <CardBody>
                  <Heading size="md" mb={5}>
                    Variants
                  </Heading>
                  <VStack spacing={4}>
                    <CustomFormControlSelect
                      setValue={() =>
                        setValue("brand", product?.brand || "NaN")
                      }
                      defaultValue={product?.brand}
                      items={["Jordan", "Nike", "Adidas"]}
                      label="Brand"
                      register={register("brand")}
                    />
                    <FormControl isRequired>
                      <FormLabel>Color</FormLabel>
                      <Input
                        defaultValue={product?.color}
                        type="text"
                        placeholder="Write color here..."
                        fontSize="small"
                        {...register("color")}
                      />
                    </FormControl>
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

export default UpdateProductPage;
