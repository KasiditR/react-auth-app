import { Outlet, useLocation, useNavigate } from 'react-router';
import Navbar from '@/components/main/Navbar';
import Footer from '@/components/main/Footer';
import { useEffect } from 'react';

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const data = location.state;
    if (!data) {
      navigate('/');
    }
  }, []);
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="pt-17">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
