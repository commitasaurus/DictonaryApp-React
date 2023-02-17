import classes from "./Header.module.css";
import BookSvg from "../UI/BookSvg";
import { Fragment } from "react";
import { ReactComponent as MenuSvg } from "../../images/icons/menu.svg";
const Header = (props) => {
  const headerBreakpoint = window.innerWidth;
  return (
    <div className={classes.header}>
      <BookSvg mode={false} />
      <div className={classes.btns}>
        {headerBreakpoint > 400 ? (
          <Fragment>
            <button className={classes.login}>Login</button>
            <button className={classes.signup}>Sign up</button>
          </Fragment>
        ) : (
          <MenuSvg className={classes.menu} />
        )}
      </div>
    </div>
  );
};

export default Header;
