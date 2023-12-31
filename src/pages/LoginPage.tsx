import {
  Button,
  Card,
  CardBody,
  Input,
  VStack,
  Flex,
  Image,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const { register, handleSubmit } = useForm<AdminLogin>();
  const { mutate } = useLogin();
  const onSubmit = (user: AdminLogin) => {
    mutate(user);
  };
  return (
    <Flex justify="center" pt={20}>
      <form onSubmit={handleSubmit((data) => onSubmit(data))} method="POST">
        <Card w="350px">
          <CardBody>
            <VStack align="center">
              <Image src={logo} w="120px" />
              <Input
                {...register("username", { required: true })}
                placeholder="Username"
              />
              <Input
                {...register("password", { required: true })}
                placeholder="Password"
                type="password"
              />
              <Button colorScheme="red" size="sm" type="submit">
                Login
              </Button>
            </VStack>
          </CardBody>
        </Card>
      </form>
    </Flex>
  );
};

export default LoginPage;
