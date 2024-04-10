import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { refreshUser } from '../../redux/auth/operations';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import RestrictedRoute from '../RestrictedRoute';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { selectIsRefreshing } from '../../redux/auth/selectors';



const Contacts = lazy(() => import('../../pages/Contacts'));
const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Login'));
const Registration = lazy(() => import('../../pages/Registration'));

const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);
    
    
    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? ( <Loader />) : (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route 
            path="/register" 
            element={
            <RestrictedRoute 
              redirectTo="/contacts" 
              component={<Registration />}
              />}
              />
            <Route
            path="/login"
            element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<Login />}
              />}
              /> 
               <Route
                    path="/contacts"
                    element={
                      <PrivateRoute
                        redirectTo="/login"
                        component={<Contacts />}
                      />
                    }
                  />
             <Route path="*" element={ <Navigate to="/" replace/>} />  
            
          </Route>
        </Routes>

     

       
      );
};

export default App;