import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import { selectAuthLoading } from '../../redux/auth/selectors';
import style from './App.module.css';


const ContactPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const Home = lazy(() => import('../../pages/Home/Home'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Registration = lazy(() => import('../../pages/Registration/Registration'));

const App = () => {
    const dispatch = useDispatch();
    // const isRefreshing = useSelector(selectIsRefreshing);
    // const loading = useSelector(selectAuthLoading);
    
    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return (
        <Layout>
          {/* {loading ? (
            <Loader />
          ) :  */}
         <div className={style.container}>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/register"
                  element={
                    <RestrictedRoute
                      redirectTo="/contacts"
                      component={<Registration />}
                    />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <RestrictedRoute
                      redirectTo="/contacts"
                      component={<Login />}
                    />
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute
                      redirectTo="/login"
                      component={<ContactPage />}
                    />
                  }
                />
              
              </Routes>
            </Suspense>
          </div>
            
              
               
                
            
          
        </Layout>
      );
};

export default App;