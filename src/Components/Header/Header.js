import classes from "./header.module.css";
import logo from "../../assets/Logo.png"
import Button from "../UI/Button";

const Header = () => {
  return (
    <header className={classes["main-header"]}>
      <div>
        <img src={logo} alt="logo"/>
      </div>
      <nav className={classes["main-nav"]}>
        <ul className={classes["main-nav__items"]}>
          <li>Service</li>
          <li className={classes.item}>Product</li>
          <li className={classes.item}>About</li>
          <li className={classes.item}>Blog</li>
          <li className={classes.item}>Career</li>
        </ul>
      </nav>
      <Button>Subscribe</Button>
    </header>
  );
};

export default Header;
