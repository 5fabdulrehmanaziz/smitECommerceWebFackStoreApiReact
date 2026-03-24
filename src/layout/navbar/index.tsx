import google_logo from "../../assets/google_logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import { RiMenuLine, RiShoppingCartLine } from "react-icons/ri";
import { useState } from "react";
import { useCart } from "../../contexts/cart";

const Navbar = (data: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { quantity }: any = useCart();
  const navigate = useNavigate();
  return (
    <nav>
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
          <span className="cart-number">{quantity}</span>
          <RiShoppingCartLine
            onClick={() => navigate("/cart")}
            color="white"
            size="2.5em"
          />
        </div>
        <div className="menu-container">
          <RiMenuLine
            color="white"
            size="2.5em"
            cursor="pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <menu className="mobile-menu">
              <ul>
                <li>
                  <NavLink to="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" onClick={() => setMenuOpen(false)}>
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </menu>
          )}
        </div>
        {!data.login && (
          <div className="navbar-ls-buttons">
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
