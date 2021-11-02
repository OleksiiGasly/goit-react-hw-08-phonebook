import { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './components/Services/PrivateRoute';
import PublicRoute from './components/Services/PublicRoute';
import AppBar from './components/AppBar/AppBar';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import ApplyLoader from './components/Loader/Loader';
import authSelectors from './redux/auth/auth-selectors';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getIsFetching);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return !isFetching ? (
    <div>
      <AppBar />
      <Suspense fallback={<ApplyLoader />}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" redirectTo="/contacts" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  ) : null;
}
