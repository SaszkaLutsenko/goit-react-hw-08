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
        <Suspense fallback={<Loader />}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {isRefreshing ? (
                        <b>...refreshing</b>
                    ) : (
                        <div>
                            <Layout />
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route
                                    path='/register'
                                    element={<RestrictedRoute component={<Registration />} redirectTo='/contacts' />}
                                />
                                <Route
                                    path='/login'
                                    element={<RestrictedRoute component={<Login />} redirectTo='/contacts' />}
                                />
                                <Route
                                    path='/contacts'
                                    element={<PrivateRoute component={<ContactPage />} redirectTo='/login' />}
                                />
                                <Route path='*' element={<NotFoundPage />} />
                            </Routes>
                        </div>
                    )}
                </>
            )}
        </Suspense>
    );
};

export default App;