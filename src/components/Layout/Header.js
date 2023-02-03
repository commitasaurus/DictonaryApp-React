import classes from "./Header.module.css";
import BookSvg from "../UI/BookSvg";
import HeaderDropdown from "./HeaderDropdown";
const Header = (props) => {
  return (
    <div className={classes.header}>
      <BookSvg mode={false} />
      <div className={classes["header__select"]}>
        <HeaderDropdown
          currentFont={props.font}
          onFontChange={props.onFontChange}
        />
      </div>
    </div>
  );
};

export default Header;
