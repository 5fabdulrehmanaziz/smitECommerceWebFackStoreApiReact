import google_logo from "../../assets/google_logo.svg";
import { NavLink } from "react-router-dom";
import "./index.css";
import { RiShoppingCartLine } from "react-icons/ri";

const index = (data: any) => {
  return (
    <div className="navbar">
      <div>
        <a href="#">
          <img src={google_logo} alt="google_logo" />
        </a>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="cart">
          <span className="cart-number">0</span>
          <RiShoppingCartLine color="white" size="2.5em" />
        </div>

        {data.login && (
          <div className="navbar-ls-buttons">
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
