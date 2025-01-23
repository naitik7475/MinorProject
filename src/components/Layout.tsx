import { Outlet } from 'react-router-dom';
import MyNavbar from './Navbar';

const Layout = () => {
  return (
    <section className="min-h-screen bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')] bg-cover bg-center">
      <div className="min-h-screen bg-slate-800/90">
        <MyNavbar />
        <Outlet /> {/* This is where child routes will render */}
      </div>
    </section>
  );
};

export default Layout;