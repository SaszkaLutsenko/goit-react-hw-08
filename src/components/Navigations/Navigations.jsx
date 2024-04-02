import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selector';
import CustomNavLink from '../CustomNavLink/CustomNavLink';

const Navigations = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <CustomNavLink key="home" to='/'>Home Page</CustomNavLink>
      {isLoggedIn && <CustomNavLink key="contacts" to='/contacts'>Contact Page</CustomNavLink>}
    </>
  );
};

export default Navigations;