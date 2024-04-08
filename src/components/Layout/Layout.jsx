import style from './Layout.module.css';
import AppBar from '../AppBar/AppBar';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className={style.container}>
          <AppBar />
          <Suspense fallback={null}>
             <Outlet />     
          </Suspense>
          {children}
          <Toaster position="top-center" />
        </div>
    );
};

export default Layout;