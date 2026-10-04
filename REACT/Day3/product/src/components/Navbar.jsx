import "./Navbar.css";
import logo from "../assets/logo.webp";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <h2>My Store</h2>
    </nav>
  );
}

export default Navbar;