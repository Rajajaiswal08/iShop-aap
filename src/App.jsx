import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Page/Layout';
import Home from './Page/Website/Home';
import Store from './Page/Website/Store';
import Cart from './Page/Website/Cart';
import Chakout from './Page/Website/Chakout';
import MyProfile from './Page/Website/MyProfile';
import Share from './Page/Website/Share';
import AdminMain from './Page/Admin/Layout';
import Dashboard from './Page/Admin/Dashboard';
import CategoryView from './Page/Admin/category/View';
import CategoryAdd from './Page/Admin/category/Add';
import CategoryEdit from './Page/Admin/category/Edit';
import ProductView from './Page/Admin/product/View'; // ProductView को import किया गया है
import ProductAdd from './Page/Admin/product/Add';  // ProductAdd को import किया गया है
import ProductEdit from './Page/Admin/product/Edit'; // ProductEdit को import किया गया है

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/store/:slug?",
            element: <Store />
          },
          {
            path: "/cart",
            element: <Cart />
          },
          {
            path: "/chakout",
            element: <Chakout />
          },
          {
            path: "/share",
            element: <Share />
          },
          {
            path: "/myprofile",
            element: <MyProfile />
          }
        ]
      },
      {
        path: "/admin",
        element: <AdminMain />,
        children: [
          {
            path: "",
            element: <Dashboard />
          },
          {
            path: "category",
            element: <CategoryView />
          },
          {
            path: "category/add",
            element: <CategoryAdd />
          },
          {
            path: "category/edit/:id",
            element: <CategoryEdit />
          },
          {
            path: "product",
            element: <ProductView />
          },
          {
            path: "product/add",
            element: <ProductAdd />
          },
          {
            path: "product/edit/:id",
            element: <ProductEdit />
          },
          {
            path: "*",
            element: <h1>Page Is Not Found</h1>
          }
        ]
      }
    ]
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
