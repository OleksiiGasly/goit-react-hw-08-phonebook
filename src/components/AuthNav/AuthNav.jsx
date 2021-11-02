import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <Navbar>
      <Nav>
        <NavLink
          to="/register"
          className={css.link}
          activeClassName={css.activeLink}
        >
          Sign up
        </NavLink>
        <NavLink
          to="/login"
          className={css.link}
          activeClassName={css.activeLink}
        >
          Sign in
        </NavLink>
      </Nav>
    </Navbar>
  );
}
