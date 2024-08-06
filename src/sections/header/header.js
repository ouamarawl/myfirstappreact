import "./header.css";
import logo from "../../assets/images/logo.png";



const Header = () => {
  return (
    <div className="header">
      <div className="Navbar">
        <img src={logo} alt="lg"/>
        <div className="list">
         <a id="hm" href="/#">home</a>
         <a href="/#">brows</a>
         <a href="/#">details</a>
         <a href="/#">streams</a>
         <a href="/#">profile</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
