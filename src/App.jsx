import "./App.css";
import { menuitem } from "./data";
import Header from "./Header/Header";
import Menu from "./body/Menu";
import { FaSearch } from "react-icons/fa";
import {
  FaHome,
  FaGlobe,
  FaBicycle,
  FaTshirt,
  FaGamepad,
  FaHeart,
  FaVideo,
} from "react-icons/fa";

function App() {
  return (
    <>
      <Header />
      <div className="menu">
        <div className="menu-title">
          <ul className="list-menu">
            {menuitem.map((item, index) => (
              <Menu key={index} item={item} />
            ))}
          </ul>
        </div>
        <div className="search">
          <FaSearch />
        </div>
      </div>
    </>
  );
}

export default App;
