import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar>
      <Nav>
        <NavLink
          exact
          to="/"
          className={css.link}
          activeClassName={css.activeLink}
        >
          Main page
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={css.link}
            activeClassName={css.activeLink}
          >
            Contacts
          </NavLink>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
