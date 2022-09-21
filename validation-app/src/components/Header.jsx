import '../Pages/style.css';
import {
  BsArrow90DegLeft,
  BsArrowBarLeft,
  BsArrowLeft,
  BsBell,
  BsQuestionCircle,
} from "react-icons/bs";

export default function Header(){
    return (
      <header className="header">
        <div className="header-info">
          <div className="left-arrow">
            <BsArrowLeft />
          </div>
          <div className="header-inter">
            <h2>Inteview Information</h2>
          </div>
        </div>
        <div className="user-info">
          <div className="question">
            <BsQuestionCircle />
          </div>
          <div className="bell">
            <BsBell />
          </div>
          <div className="user">
            <p className="User-name">Jaykr</p>
            <p className="company-name">Hire++ admin</p>
          </div>
        </div>
      </header>
    );
}