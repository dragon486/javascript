import './Header.css';
import logo from '../assets/react.svg';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">

        <div className="nav-left">
          <img src={logo} alt="logo" className="logo" />
          <span className="brand">MyApp</span>
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="nav-right">
          <button className="login-btn">Login</button>
        </div>

      </nav>
    </header>
  );
}

export default Header;
