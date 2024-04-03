import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { selectIsRefreshing } from '../../redux/auth/selector';
import { refreshUser } from '../../redux/auth/operations';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import { selectLoading } from '../../redux/auth/selector';

const NotFoundPage = (() => import('../../pages/NotFoundPage/NotFoundPage'));
const ContactPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const Home = lazy(() => import('../../pages/Home/Home'));
const LoginForm = lazy(() => import('../LoginForm/LoginForm'));
const RegistrationForm = lazy(() => import('../RegistrationForm/RegistrationForm'));

const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);
    const loading = useSelector(selectLoading)
    
    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return (
        <Layout>
            {isRefreshing ? (
                <Loader />
            ) : (
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route
                            path='/contacts'
                            element={<PrivateRoute component={<ContactPage />} redirectTo='/login' />}
                        />
                        <Route
                            path='/login'
                            element={<RestrictedRoute component={<LoginForm />} redirectTo='/contacts' />}
                        />
                        <Route
                            path='/register'
                            element={<RestrictedRoute component={<RegistrationForm />} redirectTo='/contacts' />}
                        />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            )}
        </Layout>
    );
};

export default App;