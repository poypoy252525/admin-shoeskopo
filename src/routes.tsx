import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddProductPage from "./pages/AddProductPage";
import DashboardPage from "./pages/DashboardPage";
import InventoryPage from "./pages/InventoryPage";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home" /> },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <DashboardPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/addproduct", element: <AddProductPage /> },
      { path: "inventory", element: <InventoryPage /> },
    ],
  },
]);

export default router;
