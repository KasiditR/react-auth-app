import { GoogleCallBack } from '@/components/auth/google';
// import MainLayout from '@/layouts/MainLayout';
import Auth from '@/pages/Auth';
import Home from '@/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router';
import ProtectedRoute from './ProtectedRoute';
import { GithubCallBack } from '@/components/auth/github';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    // children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
    // ],
  },
  {
    path: '/auth/google/callback',
    element: <GoogleCallBack />,
  },
  {
    path: '/auth/github/callback',
    element: <GithubCallBack />,
  },
  {
    path: '/home',
    element: <ProtectedRoute element={<Home />} />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
