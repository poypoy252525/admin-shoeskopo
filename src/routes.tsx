import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddProductPage from "./pages/AddProductPage";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <DashboardPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/addproduct", element: <AddProductPage /> },
      { path: "products/:id/update-product", element: <UpdateProductPage /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "orders/:id", element: <OrderDetailsPage /> },
    ],
  },
]);

export default router;
