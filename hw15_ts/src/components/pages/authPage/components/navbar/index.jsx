import "./style.scss";
import { NavLink } from "react-router-dom";

export const Navbar = () => {

  return (
    <div className="navbar">
      <ul>
        <li>
            <NavLink activeClassName={'active'} to={'/auth/dashboard'}>Dashboard</NavLink>
        </li>
        <li>
            <NavLink activeClassName={'active'} to={'/auth/users'}>Users</NavLink>
        </li>
        <li>
            <NavLink activeClassName={'active'} to={'/auth/products'}>Products</NavLink>
        </li>
        <li>
            <NavLink activeClassName={'active'} to={'/auth/categories'}>Categories</NavLink>
        </li>
        <li>
            <NavLink activeClassName={'active'} to={'/auth/settings'}>Settings</NavLink>
        </li>
      </ul>
    </div>
  );
};
