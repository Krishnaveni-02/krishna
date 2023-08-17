import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Princess.
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:sunkarikrishnaveni979@gmail.com"><span>sunkarikrishnaveni979@gmail.com</span></a>
          </div>
          <div className="itemContainer">
            <span> 
              <img src="assets/github.svg" alt="" />
              <a href="https://github.com/Krishnaveni-02">Krishnaveni-02</a>
            </span>
          </div>
          <div className="itemContainer">
            <span> 
              <img src="assets/linkedin.svg" alt="" />
              <a href="https://www.linkedin.com/in/sunkari-krishnaveni-970202214">Sunkari Krishnaveni</a>
            </span>
          </div> 
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
