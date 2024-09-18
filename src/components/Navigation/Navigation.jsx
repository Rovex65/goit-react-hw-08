import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
