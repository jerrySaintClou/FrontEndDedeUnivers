import { Link, NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={classes.barNav}>
      <div className={classes.liensNavBar}>
        <NavLink
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "3px solid black" : "",
            };
          }}
          to="/"
          className={classes.leLien}
        >
          Accueil
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "3px solid black" : "",
            };
          }}
          to="/product"
          className={classes.leLien}
        >
          Produit
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "3px solid black" : "",
            };
          }}
          to="/contact"
          className={classes.leLien}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}
