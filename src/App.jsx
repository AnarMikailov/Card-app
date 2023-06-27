import ProductList from './components/ProductList';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';

function App() {
  //Implmenting React Router 6.4+

  // const { item } = useStateContext();
  // console.log(item);
  // const router = createBrowserRouter([
  //   {
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: '/',
  //         element: <ProductList />,
  //         errorElement: <ErrorPage />,
  //       },
  //       {
  //         path: '/products',
  //         element: <ProductDetails />,
  //         errorElement: <ErrorPage />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
