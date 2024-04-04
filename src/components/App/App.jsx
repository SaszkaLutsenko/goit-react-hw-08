import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import { selectLoading } from '../../redux/auth/selectors';
import style from './App.module.css';

const NotFoundPage = (() => import('../../pages/NotFoundPage/NotFoundPage'));
const ContactPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const Home = lazy(() => import('../../pages/Home/Home'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Registration = lazy(() => import('../../pages/Registration/Registration'));

const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);
    const loading = useSelector(selectLoading);
    
    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return (
        <>
          {}
          {loading ? (
            <Loader />
          ) : (
            <>
              {isRefreshing ? (
                <b>...Refreshing</b>
              ) : (
                <div className={style.container}>
                  <Routes>
                    <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />
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
                    </Route>
                  </Routes>
                </div>
              )}
            </>
          )}{" "}
          {}
        </>
      );
};

export default App;