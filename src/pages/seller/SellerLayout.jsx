import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import { NavLink, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';

const SellerLayout = () => {
  const { axios, navigate } = useAppContext();

  const sidebarNavLinks = [
    { name: 'Add Product', path: '/seller', icon: assets.add_icon },
    {
      name: 'Product List',
      path: '/seller/product-list',
      icon: assets.product_list_icon,
    },
    { name: 'Seller orders', path: '/seller/orders', icon: assets.order_icon },
  ];

  const logout = async () => {
    try {
      const { data } = await axios.get('/api/seller/logout');
      if (data.success) {
        toast.success(data.message);
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white ">
        <NavLink to={'/'}>
          <img
            className="cursor-pointer w-34 md:w-38"
            src={assets.logo}
            alt="logo"
          />
        </NavLink>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button
            className="border rounded-full text-sm px-4 py-1"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col ">
          {sidebarNavLinks.map((item) => (
            <NavLink
              to={item.path}
              end={item.path === '/seller'}
              key={item.name}
              href={item.path}
              className={({ isActive }) => `flex items-center py-3 px-4 gap-3 
                            ${
                              isActive
                                ? 'border-r-4 md:border-r-[6px] bg-primary/20 border-primary text-primary'
                                : 'hover:bg-gray-100/90 border-white'
                            }`}
            >
              <img src={item.icon} alt="" className="w-7 h-7" />
              <p className="md:block hidden text-center">{item.name}</p>
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};
export default SellerLayout;
