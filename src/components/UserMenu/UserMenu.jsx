import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import authSelectors from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Navbar>
      <p className="welcome">Welcome, {name}!</p>
      <button
        className="btn-logout"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Exit
      </button>
    </Navbar>
  );
}
