import { AddIcon } from "@chakra-ui/icons";
import { Box, VStack, Button } from "@chakra-ui/react";
import { MdOutlineDashboard } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { GiRunningShoe } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const menu = [
    { label: "Dashboard", icon: <MdOutlineDashboard />, path: "/home" },
    { label: "Products", icon: <GiRunningShoe />, path: "/products" },
    { label: "Add Product", icon: <AddIcon />, path: "/products/addproduct" },
    { label: "Orders", icon: <CiShoppingCart />, path: "/orders" },
  ];

  return (
    <Box
      h="100vh"
      boxShadow="md"
      borderRight="1px"
      borderColor="gray.300"
      position="fixed"
      bg="white"
      w="270px"
    >
      <VStack align="flex-start" p={2} spacing={1}>
        {menu.map((item, index) => (
          <Button
            isActive={item.path === location.pathname}
            size="sm"
            key={index}
            colorScheme="red"
            variant="ghost"
            w="100%"
            justifyContent="flex-start"
            leftIcon={item.icon}
            onClick={() => {
              navigate(item.path);
            }}
          >
            {item.label}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
