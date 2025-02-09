import { GoogleCallBack } from '@/components/auth';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/api/google/callback',
    element: <GoogleCallBack />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
