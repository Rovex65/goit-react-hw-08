import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectAuthError, selectAuthUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import toast from "react-hot-toast";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  const error = useSelector(selectAuthError);

  const handleLogOut = () =>
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast.success("User has been logged out");
      })
      .catch(() => {
        toast.error(error);
      });
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
