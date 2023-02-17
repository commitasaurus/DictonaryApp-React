import React, { Fragment } from "react";
import { ReactComponent as SearchSvg } from "../../images/icons/search.svg";
import classes from "./SearchBar.module.css";
const SearchBar = (props) => {
  return (
    <form className={classes.search} onSubmit={props.searchDataHandler}>
      <input />
      <SearchSvg className={classes.icon} />
    </form>
  );
};

export default SearchBar;
