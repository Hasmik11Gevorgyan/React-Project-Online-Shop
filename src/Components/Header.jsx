import { Link } from "react-router-dom";
import { useState } from "react";

const light = {
  backgroundColor: "white",
};
const dark = {
  backgroundColor: "#555464",
};

function Header() {
  const [screenMode, setScreenMode] = useState(light);
  const mode = () => {
    setScreenMode((screenMode) => (screenMode == dark ? light : dark));
  };

  return (
    <div className="navbar" style={screenMode}>
      <Link to="/" className="link">
        <div className="name"> FOODY</div>
      </Link>
      <Link to="/" className="link">
        Home
        <div className="shop-img1"></div>
      </Link>
      <Link to="/fruits" className="link">
        Fruits
        <div className="shop-img2"></div>
      </Link>
      <Link to="/vegetables" className="link">
        Vegetbles
        <div className="shop-img3"></div>
      </Link>
      <Link to="/fresh" className="link">
        Fresh
        <div className="shop-img4"></div>
      </Link>
      <Link to="/shoppingCard" className="link">
        My Shopping
        <div className="shop-img"></div>
      </Link>
      <div className="search">
        <button className="button1" onClick={mode}>
          Dark/Light
        </button>
      </div>
    </div>
  );
}

export default Header;
