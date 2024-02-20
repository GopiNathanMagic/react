import { useState } from "react";

const Navbar = () => {
  // to change burger classes

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change

  const updatemenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className="hamburger-outer">
        <nav className="hamburger">
          <div className="burger-menu" onClick={updatemenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </nav>

        <div className={menu_class}>
          <div className="header-menu">
            <nav>
              <ul>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Solutions</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
                <li>
                  <a href="#">Customers</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-login">
            <a href="#" className="login">
              Login
            </a>
            <a href="#" className="btn">
              Start free
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
