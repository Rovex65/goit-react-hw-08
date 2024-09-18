import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { Layout } from "./Layout";
import { refreshUser } from "../redux/auth/operations";
import { selectAuthIsRefreshing } from "../redux/auth/selectors";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);

function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <p>User is refreshing, please wait</p>;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
