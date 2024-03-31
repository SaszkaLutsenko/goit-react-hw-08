import style from './Layout.module.css';
import AppBar from '../AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
    return (
        <div className={style.container}>
          <AppBar />
          {children}
          <Toaster position="top-center" />
        </div>
    );
};

export default Layout;