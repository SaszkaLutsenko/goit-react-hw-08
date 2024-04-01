import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selector";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({component: Component, redirectTo = '/login'}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? Component : <Navigate to={redirectTo} />
};

export default PrivateRoute;