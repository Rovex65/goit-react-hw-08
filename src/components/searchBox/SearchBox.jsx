import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

function SearchBox() {
  const searchId = useId();
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChangeSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        id={searchId}
        type="text"
        value={searchValue}
        onChange={handleChangeSearch}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBox;
