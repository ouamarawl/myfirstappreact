import "./header.css";
import logo from "../../assets/images/logo.png";
import Prifile_header from "../../assets/images/profile-header.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="Navbar">
        <img src={logo} alt="lg" />
        <div class="search-container">
          
          <button class="search-button">
           <input type="text" placeholder="Search..." class="search-input" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="search-icon"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="list">
          <Link to="/" >home</Link>
         
          <a href="/#">brows</a>
          <a href="/#">details</a>
          <button id="button-pr">
            {" "}
            <Link to="/Profile" >home</Link>{" "}
            <img id="img_btn" src={Prifile_header} alt="lg" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
