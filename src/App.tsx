import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={5}>
          <Box w="100%" h="64px" />
        </GridItem>
        <GridItem colSpan={1}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={4}>
          <Box bg="gray.100" w="100%" minH="100vh">
            <main>
              <Outlet />
            </main>
          </Box>
        </GridItem>
      </Grid>
      <Navbar />
    </Box>
  );
};

export default App;
