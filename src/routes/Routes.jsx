import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Error from '../pages/Error';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Registration from '../pages/Registration';
import Order from '../pages/Order';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        ),
      },
      { path: 'signin', Component: SignIn },
      { path: 'registration', Component: Registration },
      {
        path: 'orders',
        element: (
          <PrivateRoutes>
            <Order />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
