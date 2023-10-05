import { useState, useEffect } from "react";
import Button from "../Button/Button.jsx";
import "./Navbar.css";
import img from "../../assets/medium.svg"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Alquimia Digital
            <img src={img} className="img-logo" width={80} height={60}></img>
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a to="/services" className="nav-links" onClick={closeMobileMenu}>
                Quienes Somos
              </a>
            </li>
            <li className="nav-item">
              <a href="#Projects" className="nav-links" onClick={closeMobileMenu}>
                Diseños Web
              </a>
            </li>

            <li>
             {/*  <a
                href="#Contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contacto
              </a> */}
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contacto</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
