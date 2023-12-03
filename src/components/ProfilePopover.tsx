import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  IconButton,
  Avatar,
  Center,
  Heading,
  VStack,
  Icon,
  PopoverFooter,
} from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProfilePopover = () => {
  const navigate = useNavigate();
  const user = useAuth();

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <IconButton aria-label="profile" rounded="full">
          <Avatar size="sm" name={user?.username} w="100%" h="100%" />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent w="250px">
        <PopoverArrow />
        <PopoverHeader>
          <Center py={3}>
            <VStack>
              <Avatar name={user?.username} />
              <Heading size="xs">{user?.username}</Heading>
            </VStack>
          </Center>
        </PopoverHeader>
        <PopoverBody px={0}>
          <VStack>
            <Button
              w="100%"
              size="sm"
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={<Icon as={FiUser} />}
              onClick={() => navigate("/profile")}
            >
              Profile
            </Button>
          </VStack>
        </PopoverBody>
        <PopoverFooter>
          <Button
            size="sm"
            w="100%"
            variant="outline"
            leftIcon={<Icon as={MdLogout} />}
            onClick={() => {
              localStorage.removeItem("auth");
              navigate("/login");
            }}
          >
            Sign out
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default ProfilePopover;
