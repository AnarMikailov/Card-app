import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import ProductList from "./components/ProductList";
function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ProductList />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/products",
          element: <ProductDetails />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      <ProductList />
    </>
  );
}

export default App;
