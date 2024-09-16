import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Page/Layout';
import Home from './Page/Website/Home';
import Store from './Page/Website/Store';
import Cart from './Page/Website/Cart';
import Chakout from './Page/Website/Chakout';
import MyProfile from './Page/Website/MyProfile';
import Share from './Page/Website/Share';

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
      }
    ]
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
