import { useSelector } from "react-redux";
import { Link } from "react-router";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "#282c34",
    padding: "15px 20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "5px",
  };

  const selector = useSelector(selector => selector.cart)
  console.log(selector);
  

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>

      <Link to="/about" style={linkStyle}>
        About
      </Link>

      <Link to="/products" style={linkStyle}>
        Products
      </Link>

      <Link to="/cart" style={linkStyle}>
        Cart {selector.length}
      </Link>
    </nav>
  );
};

export default Navbar;