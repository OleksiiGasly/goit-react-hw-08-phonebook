import { useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/auth-selectors';
import css from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar className={css.appbar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Navbar>
  );
}
