import { Outlet } from 'react-router';
import Navbar from '@/components/main/Navbar';
import Footer from '@/components/main/Footer';

const MainLayout = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar />
      <div className="pt-17">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
